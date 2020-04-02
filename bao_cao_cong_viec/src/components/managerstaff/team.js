import React from 'react'
import Button from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, FilterRow, Popup, Form, Position, Pager } from 'devextreme-react/data-grid';
import ControlSearchComponent from './controlsearch';
import ApiService from '../../share/apiservice'
import notify from 'devextreme/ui/notify';
import { Item } from 'devextreme-react/form';

export default class TeamComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      events: [],
      loading: false,
      showControlSearch: {
        showCompanyId: true,
        showBrandId: true,
        showDepartmentId: true,
        showTeamId: false,
      },
      dataSearchControl: {},
      dataTeam: []
     };
    this.logEvent = this.logEvent.bind(this);
    this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
    this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
    this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving');
    this.clearEvents = this.clearEvents.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.getTeam = this.getTeam.bind(this);
  }

  onSearchClick(event, data){
    this.setState({dataSearchControl: data});
    this.getTeam();       
  }

  getTeam() {
    if(this.state.dataSearchControl.showBrandId > 0){
      // Lấy theo chi nhánh
      var data = [];
      ApiService.GetTeamByBrandId().then((result) => {
        if(result !== null && result !== undefined) {
          if(result.data != null && result.data.status === 1) {
            data = result.data.data;
            this.setState({
              dataTeam: data,
            })
          }
        }
      });
    }
    else {
      // Lấy theo công ty
      ApiService.GetTeamByCompanyId().then((result) => {
        if(result !== null && result !== undefined) {
          if(result.data != null && result.data.status === 1) {
            data = result.data.data;
            this.setState({
              dataTeam: data,
            })
          }
        }
      });
    }
  }

  logEvent(event, eventName) {
    var oldData = this.state.data;
    switch(eventName) {
      case "RowUpdating":
        ApiService.UpdateTeam(event.oldData.id, event.newData).then((result) => { 
          this.getTeam();
          if(result.data.status === 1){
              notify({message: 'Cập nhật thông tin team thành công.'}, 'success');
          }
          else {
            notify({message: 'Cập nhật thông tin team thất bại.'}, 'error');                
          }
        }).catch((result) => {
          notify({message: 'Cập nhật thông tin team thất bại.'}, 'error');
        })
        break;
      case "RowRemoving":
        ApiService.DeleteTeam(event.data.id).then((result) => { 
          this.getTeam();
          if(result.data.status === 1){
              notify({message: 'Xóa thông tin team thành công.'}, 'success');
          }
          else {
            notify({message: 'Xóa thông tin team thất bại.'}, 'error');                
          }
        }).catch((result) => {
          notify({message: 'Xóa thông tin team thất bại.'}, 'error');
        })
        break;
      case "RowInserting":
        ApiService.CreateTeam(event.data).then((result) => { 
          this.getTeam();
          if(result.data.status === 1){
              notify({message: 'Tạo mới team thành công.'}, 'success');
          }
          else {
            notify({message: 'Tạo mới team thất bại.'}, 'error');                
          }
        }).catch((result) => {
          notify({message: 'Tạo mới team thất bại.'}, 'error');
        })
      break;      
    }
  }

  clearEvents() {
    this.setState({ events: [] });
  }

render(){
    return(
        <div>
          <ControlSearchComponent dataShowControlSearch={this.state.showControlSearch} onSearchClick={this.onSearchClick}></ControlSearchComponent> 
          <h4>DANH SÁCH TEAM</h4>
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
                <Column dataField="name" caption="Tên team"  width={220}/>
                <Column dataField="createTime" caption="TG tạo" dataType="date" format="dd/MM/yyyy"  width={120}/>
                <Column dataField="updateTime" caption="TG cập nhật" dataType="date"  format="dd/MM/yyyy" width={120}/>
                <Column dataField="description" caption="Ghi chú" />
                </DataGrid>
            </React.Fragment>
        </div>
    )
  }
}