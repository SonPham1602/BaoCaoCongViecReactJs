import React from 'react';
import { Alldata } from './data.js';

function isWeekEnd(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function getCurrentTraining(date, employeeID) {
  const result = (date + employeeID) % 3;
  const currentTraining = `training-background-${result}`;

  return currentTraining;
}
function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}
class DataCell extends React.PureComponent {
  render() {
    const { data: { startDate, groups: { employeeID }, text } } = this.props;
    const dayClasses = [
      'day-cell',
    //   getCurrentTraining(startDate.getDate(), employeeID)
    ];

    const employeeClasses = [ `employee-${employeeID}`, 'dx-template-wrapper' ];
    return (
      <div className={employeeClasses.join(' ')}>
        <div className={dayClasses.join(' ')}>
          {text}
        </div>
      </div>
    );
  }
}

export default DataCell;