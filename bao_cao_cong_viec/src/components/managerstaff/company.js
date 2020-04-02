import React from 'react'
import Button from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, FilterRow, Popup, Form, Position, Pager } from 'devextreme-react/data-grid';
import ApiService from '../../share/apiservice'
import Global from '../../share/global';
import notify from 'devextreme/ui/notify';
import { Item } from 'devextreme-react/form';

class CompanyComponent extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
          eventAddNew: false,
          data: [],
          events: [] 
        };
        this.logEvent = this.logEvent.bind(this);
        this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
        this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
        this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving');
        this.clearEvents = this.clearEvents.bind(this);
        this.getAllCompany = this.getAllCompany.bind(this);
      }

      componentDidMount() {
        this.getAllCompany();
      }
    
      logEvent(eventName, event) {
        // var oldData = this.state.data;
        switch(eventName) {
          case "RowUpdating":
            ApiService.UpdateCompany(event.oldData.id, event.newData).then((result) => { 
              if(result !== null && result !== undefined){
                this.getAllCompany();
                if(result.data.status === 1){
                    notify({message: 'Cập nhật thông tin công ty thành công.'}, 'success');
                }
                else {
                  notify({message: 'Cập nhật thông tin công ty thất bại.'}, 'error');                
                }
              }
            }).catch((result) => {
              notify({message: 'Cập nhật thông tin công ty thất bại.'}, 'error');
            })
            break;
          case "RowRemoving":
            ApiService.DeleteCompany(event.data.id).then((result) => { 
              if(result !== null && result !== undefined){
                this.getAllCompany();
                if(result.data.status === 1){
                    notify({message: 'Xóa thông tin công ty thành công.'}, 'success');
                }
                else {
                  notify({message: 'Xóa thông tin công ty thất bại.'}, 'error');                
                }
              }
            }).catch((result) => {
              notify({message: 'Xóa thông tin công ty thất bại.'}, 'error');
            })
            break;
          case "RowInserting":
            ApiService.CreateCompany(event.data).then((result) => {
              if(result !== null && result !== undefined){ 
                this.getAllCompany();
                if(result.data.status === 1){
                    notify({message: 'Tạo mới công ty thành công.'}, 'success');
                }
                else {
                  notify({message: 'Tạo mới công ty thất bại.'}, 'error');                
                }
              }
            }).catch((result) => {
              notify({message: 'Tạo mới công ty thất bại.'}, 'error');
            })
          break;      
        }
      }
    
      clearEvents() {
        this.setState({ events: [] });  
    }

    getAllCompany() {
      var data = [];
      ApiService.GetCompanys().then((result) => {
        if(result !== null && result !== undefined){
          if(result.data != null && result.data.status === 1)
          {
            data = result.data.data;
            this.setState({
              data: data,
            })
          }
        }
      });
    }

    render(){
        return(
            <div> 
                <h4>DANH SÁCH CÔNG TY</h4>
                <React.Fragment>
                    <DataGrid
                    id="gridContainer"
                    dataSource={this.state.data}
                    showRowLines={true}
                    showBorders={true}
                    keyExpr="id"
                    onRowInserting={this.onRowInserting}
                    onRowUpdating={this.onRowUpdating}
                    onRowRemoving={this.onRowRemoving}
                    >
                    <Paging defaultPageSize={10} />
                    <Pager
                      showPageSizeSelector={true}
                      allowedPageSizes={[5, 10, 20]}
                      showInfo={true} />
                    <FilterRow visible={true} />
                    <Editing mode="popup"
                      allowUpdating={true}
                      allowDeleting={true}
                      allowAdding={true}
                      useIcons={true}>
                      <Popup title="Thông tin chông ty" showTitle={true} width={700} height={300}>
                        <Position my="top" at="top" of={window} />
                      </Popup>
                      <Form>
                        <Item dataField="name" colCount={2} colSpan={2} editorOptions={{disable: false}} />
                        <Item dataField="description" editorType="dxTextArea"
                            colSpan={2}  editorOptions={{ height: 80 }} />
                      </Form>
                    </Editing>                  
                    <Column
                      dataField="STT" 
                      caption="STT"
                      alignment="left"
                      allowEditing={false}
                      width={50}
                      fixed={true}
                      allowSorting={false}
                      allowFiltering={false}                     
                      cellTemplate={function (container, options) {
                          var res = (options.rowIndex + 1).toString();
                          container.append(res);
                          options.data.STT = res;}} />
                    <Column dataField="id" caption="id" visible={false}/>                  
                    <Column dataField="name" caption="Tên công ty"  width={220}/>
                    <Column dataField="createTime" caption="TG tạo" dataType="date" format="dd/MM/yyyy"  width={120}/>
                    <Column dataField="updateTime" caption="TG cập nhật" dataType="date"  format="dd/MM/yyyy" width={120}/>
                    <Column dataField="description" caption="Ghi chú" />
                    </DataGrid>
                </React.Fragment>
            </div>
        )
    }
}
export default CompanyComponent 