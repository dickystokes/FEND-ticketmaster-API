import React from "react";
import App from "../App";

const Table = ({ tickets }) => {
  const ticketRows = tickets.map(ticket => (
    <tr>
      <td>{ticket.name}</td>
      <td>{ticket.type}</td>
      <td>{ticket.id}</td>
      <td>{ticket.url}</td>
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
        </tr>
      </thead>
      <tbody>{ticketRows}</tbody>
    </table>
  );
};

export default Table;
