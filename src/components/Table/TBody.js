import React from "react";
import PropTypes from "prop-types";

const TBody = ({ rowsContent }) => {
  return (
    <tbody>
      {rowsContent.map((data) => (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.commerce}</td>
          <td>{data.cuit}</td>
          {data.concepts.map((concept, index) => (
            <td key={index}>{concept}</td>
          ))}
          <td>{data.current_balance}</td>
          <td>{data.active ? "Sí" : "No"}</td>
          <td>{data.last_sale}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;

TBody.propTypes = {};
