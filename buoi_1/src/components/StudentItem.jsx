import React from "react";

function StudentItem(props) {
  return (
    <tr>
      <td>{props.studentId}</td>
      <td>{props.studentLastName}</td>
      <td>{props.studentFirstName}</td>
    </tr>
  );
}

export default StudentItem;
