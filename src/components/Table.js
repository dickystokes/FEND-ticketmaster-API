import React from 'react';
import App from '../App';

const Table = ({ tmEvents }) => {
  //const selecttmEventss = tmEventss.filter(tmEvents => tmEvents.name.includes(nameFilter))
  const tmEventsRows = tmEvents.map(tmEvents => (
    <tr>
      <td>{tmEvents.name}</td>
      <td>{tmEvents.type}</td>
      <td>{tmEvents.id}</td>
      <td>{tmEvents.url}</td>
      <td>{tmEvents._embedded.venues['0'].location.longitude}</td>
      <td>{tmEvents._embedded.venues['0'].location.latitude}</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th> Name </th>
          <th> Type </th>
          <th> ID </th>
          <th> url </th>
          <th> longitude </th>
          <th> latitude </th>
        </tr>
      </thead>
      <tbody>{tmEventsRows}</tbody>
    </table>
  );
};

export default Table;
