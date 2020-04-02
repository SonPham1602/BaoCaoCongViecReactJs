import React from 'react'
import Button from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, Lookup } from 'devextreme-react/data-grid';
import ApiService from '../../share/apiservice';

class ManagerReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: [],
      dataTable:null
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

    this.clearEvents = this.clearEvents.bind(this);
  }
  componentDidMount()
  {
    ApiService.GetReportCanRead().then(req=>{
      console.log("List",req);
      
    })
  }

  logEvent(eventName) {
    this.setState((state) => {
      return { events: [eventName].concat(state.events) };
    });
  }

  clearEvents() {
    this.setState({ events: [] });
  }
  render() {
    return (
      <div>
        <React.Fragment>
          <DataGrid
            id="gridContainer"
            dataSource={this.state.dataTable}
            keyExpr="ID"
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
              allowUpdating={true}
              allowDeleting={true}
              allowAdding={true} />

            <Column dataField="Prefix" caption="Title" />
            <Column dataField="FirstName" />
            <Column dataField="LastName" />
            <Column dataField="Position" width={130} />
            <Column
              dataField="StateID"
              caption="State"
              width={125}
            >
            </Column>
            <Column
              dataField="BirthDate"
              width={125}
              dataType="date" />
          </DataGrid>
        </React.Fragment>
      </div>
    )
  }
}
export default ManagerReport
