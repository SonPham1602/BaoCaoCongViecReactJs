import React from 'react'
import Button from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, Lookup } from 'devextreme-react/data-grid';
import ApiService from '../../share/apiservice';
import DownloadWord from 'html-docx-js/dist/html-docx'
import { saveAs } from 'file-saver'
import ReportForm from './formReport'
class ManagerReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: [],
      dataTable:null,
      selectReportId:null,
      showViewReportPanel:false,
      dataViewReport:{
        title:'',
        content:'',
        description:'',
        createTime:'',
        updateTime:'',

      }
    };
    this.logEvent = this.logEvent.bind(this);
    this.onEditingStart = this.logEvent.bind(this, 'EditingStart');
    this.onInitNewRow = this.logEvent.bind(this, 'InitNewRow');
    this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
    this.onRowInserted = this.logEvent.bind(this, 'RowInserted');
    this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
    this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
    this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving');
    this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved');
    this.downloadReport = this.downloadReport.bind(this)
    this.clearEvents = this.clearEvents.bind(this);
    this.viewReport = this.viewReport.bind(this)
    this.closeViewReportPanel = this.closeViewReportPanel.bind(this)
  }

  closeViewReportPanel()
  {
    this.setState({
      showViewReportPanel:false
    })
  }
  componentDidMount()
  {
    ApiService.GetReportCanRead().then(req=>{
      console.log("List",req);
      this.setState({
        dataTable:req.data.reports
      })
      
    })
  }

  logEvent(eventName) {
    this.setState((state) => {
      return { events: [eventName].concat(state.events) };
    });
  }
  viewReport(event)
  {
    console.log(event.row.data)
    const reportId = event.row.data._id
    ApiService.GetReportDetailByReportId(reportId).then(req=>{
      this.setState({
        selectReportId:reportId,
        showViewReportPanel:true,
        dataViewReport:{
          title:event.row.data.title,
          content:req.data.reportDetail.content,
          createTime:event.row.data.createTime
        }
      })
      console.log(req)
    })
    console.log("View report")
    

  }

  downloadReport(event)
  {
    const reportId = event.row.data._id
    const nameFile = event.row.data.title
    ApiService.GetReportDetailByReportId(reportId).then(req=>{
      console.log(req.data.reportDetail.content)
      var converted =  DownloadWord.asBlob(req.data.reportDetail.content)
      console.log(converted)
      saveAs(converted, `${nameFile}.docx`);
    })
    
    console.log("Download report")
    
  }

  clearEvents() {
    this.setState({ events: [] });
  }
  render() {
    const ViewReportStyle = {
      position: 'absolute',
      background: 'white',
      left: '0px',
      right:'0px',
      bottom: '0px',
      top:'0px',
      zIndex: 1
    }
    const ButtonCloseViewReportStyle = {
      position: 'absolute',
      right: '10px',
      top: '0px',

    }

    return (
      <div style={{position:"fixed",height:"100%",overflow: 'scroll'}}>
         {this.state.showViewReportPanel && <div style={ViewReportStyle}>
          <div>
            <h3>Chi tiết báo cáo</h3>
            <button onClick={this.closeViewReportPanel} style={ButtonCloseViewReportStyle}>
              Đóng
            </button>
          </div>
          <ReportForm 
            content = {this.state.dataViewReport.content}
            title = {this.state.dataViewReport.title}  
            description = {this.state.dataViewReport.description}  
            mode = 'view'
            updateReportId = {this.state.selectReportId}
            reportInfo = {{createTime:this.state.dataViewReport.createTime}}
          ></ReportForm>
        </div>}
        <h3>Quản lý báo cáo</h3>
        <React.Fragment>
          <DataGrid
            id="gridContainer"
            dataSource={this.state.dataTable}
            keyExpr="_id"
            allowColumnReordering={true}
            showBorders={true}
            onEditingStart={this.onEditingStart}
            onInitNewRow={this.onInitNewRow}
            onRowInserting={this.onRowInserting}
            onRowInserted={this.onRowInserted}
            onRowUpdating={this.onRowUpdating}
            onRowUpdated={this.onRowUpdated}
            onRowRemoving={this.onRowRemoving}
            onRowRemoved={this.onRowRemoved}>
            <Paging enabled={true} />
            <Editing
              mode="row"
              allowUpdating={false}
              allowDeleting={false}
              allowAdding={false} />

            <Column dataField="title" caption="Tiêu đề báo cáo" />
            <Column dataField="authorInfo.name" caption="Tên nhân viên" />
            <Column dataField="createTime" caption="Thời gian gửi" />
            <Column dataField="department.name" caption="Phòng"  />
            <Column dataField="branch.name" caption="Chi nhánh"  />
            <Column caption="Xem" type="buttons" width={60}
          buttons={[ {
            hint: 'Xem báo cáo',
            icon: 'activefolder',
            visible: this.isCloneIconVisible,
            onClick: this.viewReport
          
          }]} />
            <Column
              caption="Tải"
              width={60}
              type="buttons"
              buttons={[ {
                hint: 'Tải báo cáo',
                icon: 'download',
                visible: this.isCloneIconVisible,
                onClick: this.downloadReport
              
              }]} 
              />
          </DataGrid>
        </React.Fragment>
      </div>
    )
  }
}
export default ManagerReport
