import React from 'react'
import Button from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, FilterRow, Popup, Form, Position, Pager, Lookup } from 'devextreme-react/data-grid';
import ApiService from '../../share/apiservice'
import Global from '../../share/global';
import notify from 'devextreme/ui/notify';
import { Item } from 'devextreme-react/form';

class BranchComponent extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
          eventAddNew: false,
          dataCompany: [],
          dataBranch: [],
          events: [] 
        };
        this.logEvent = this.logEvent.bind(this);
        this.onI = this.logEvent.bind(this, 'RowInserting');
        this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
        this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
        this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving');
        this.clearEvents = this.clearEvents.bind(this);
        this.getAllCompany = this.getAllCompany.bind(this);
      }

      componentDidMount() {
        this.getAllCompany();
        this.getAllBranch();
      }
    
      logEvent(eventName, event) {
        var oldData = this.state.data;
        switch(eventName) {
          case "RowUpdating":
            ApiService.UpdateBranch(event.oldData.id, event.newData).then((result) => { 
              if(result !== null && result !== undefined){
                this.getAllBranch();
                if(result.data.status === 1){
                    notify({message: 'Cập nhật thông tin chi nhánh thành công.'}, 'success');
                }
                else {
                  notify({message: 'Cập nhật thông tin chi nhánh thất bại.'}, 'error');                
                }
              }
            }).catch((result) => {
              notify({message: 'Cập nhật thông tin chi nhánh thất bại.'}, 'error');
            })
            break;
          case "RowRemoving":
            ApiService.DeleteBranch(event.data.id).then((result) => { 
              if(result !== null && result !== undefined){
                this.getAllBranch();
                if(result.data.status === 1){
                    notify({message: 'Xóa thông tin chi nhánh thành công.'}, 'success');
                }
                else {
                  notify({message: 'Xóa thông tin chi nhánh thất bại.'}, 'error');                
                }
              }
            }).catch((result) => {
              notify({message: 'Xóa thông tin chi nhánh thất bại.'}, 'error');
            })
            break;
          case "RowInserting":
            ApiService.CreateBranch(event.data).then((result) => { 
              if(result !== null && result !== undefined){
                this.getAllBranch();
                if(result.data.status === 1){
                    notify({message: 'Tạo mới chi nhánh thành công.'}, 'success');
                }
                else {
                  notify({message: 'Tạo mới chi nhánh thất bại.'}, 'error');                
                }
              }
            }).catch((result) => {
              notify({message: 'Tạo mới chi nhánh thất bại.'}, 'error');
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
          if(result.data != null && result.data.status === 1) {
            data = result.data.data;
            this.setState({
              dataCompany: data,
            })
          }
        }
      });
    }

    getAllBranch() {
      var data = [];
      ApiService.GetBranchs().then((result) => {
        if(result !== null && result !== undefined){
          if(result.data != null && result.data.status === 1) {
            data = result.data.data;
            this.setState({
              dataBranch: data,
            })
          }
        }
      });
    }

    render(){
        return(
            <div> 
                <h4>DANH SÁCH CHI NHÁNH</h4>
                <React.Fragment>
                    <DataGrid
                    id="gridContainer"
                    dataSource={this.state.dataBranch}
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
                        <Item dataField="companyId" />
                        <Item dataField="name" />
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
                    <Column dataField="companyId" caption="Tên công ty" groupIndex={0}>
                    <Lookup dataSource={this.state.dataCompany} displayExpr="name" valueExpr="id" />
                    </Column>       
                    <Column dataField="name" caption="Tên chi nhánh"  width={300}/>
                    <Column dataField="createTime" caption="TG tạo" dataType="date" format="dd/MM/yyyy"  width={120}/>
                    <Column dataField="updateTime" caption="TG cập nhật" dataType="date"  format="dd/MM/yyyy" width={120}/>
                    <Column dataField="description" caption="Ghi chú" />
                    </DataGrid>
                </React.Fragment>
            </div>
        )
    }
}
export default BranchComponent 