import React from "react";

const CarRow = props => (
  <tr>
    <th scope="row">{props.make}</th>
    <td>{props.model}</td>
    <td>{props.price}</td>
    <td>{props.category}</td>
    <td>{props.origin}</td>
    <td>{props.services}</td>
    <td>{props.dateAdded}</td>
  </tr>
);

export default CarRow;
