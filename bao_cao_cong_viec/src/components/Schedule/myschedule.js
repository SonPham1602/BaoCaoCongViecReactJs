import React from 'react';

import Scheduler, { Resource } from 'devextreme-react/scheduler';

import { employees, Alldata } from './data.js';
import DataCell from './DataCell.js';
import ResourceCell from './ResourceCell.js';
import AppointmentTemplate from './AppointmentTemplate.js';

const currentDate = new Date(2016, 7, 2, 11, 30);
const groups = ['employeeID'];
const views = ['month'];

class MySchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  render() {
    return (
      <Scheduler
        dataSource={Alldata}
        dataCellComponent={DataCell}
        resourceCellComponent={ResourceCell}
        groups={groups}
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={800}
        showAllDayPanel={true}
        firstDayOfWeek={1}
        // startDayHour={8}
        // endDayHour={18}
        maxAppointmentsPerCell={'70px'}       
        onAppointmentFormOpening={this.onAppointmentFormOpening}
        appointmentRender={AppointmentTemplate}
      >
        <Resource
          label="Employee"
          fieldExpr="employeeID"
          dataSource={employees}
          allowMultiple={false}
        />
      </Scheduler>
    );
  }
  
  onAppointmentFormOpening(data) {
    let form = data.form,
      
      startDate = data.appointmentData.startDate;
    console.log(startDate);
    form.option('items', [{
      name: 'endDate',
      dataField: 'endDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
        type: 'datetime',
        readOnly: true
      }
    }, {
      dataField: 'price',
      editorType: 'dxRadioGroup',
      editorOptions: {
        dataSource: [5, 10, 15, 20],
        itemTemplate: function(itemData) {
          return `$${itemData}`;
        }
      }
    }
    ]);
  }
}

export default MySchedule;