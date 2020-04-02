import React from 'react';
import Query from 'devextreme/data/query';
// import 'devextreme/localization/globalize/date';

// import Globalize from 'globalize';
// import { moviesData } from './data.js';

// function getMovieById(id) {
//   return Query(moviesData).filter(['id', id]).toArray()[0];
// }

export default function AppointmentTemplate(model) {
//   const movieData = getMovieById(model.appointmentData.movieId) || {};
console.log(model);
    const styleCell = {
        fontSize: "15px",
    }
  return (
    <div style={styleCell}>
      <div>{model.appointmentData.content}</div>
    </div>
  );
}
