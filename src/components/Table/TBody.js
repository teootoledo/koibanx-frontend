import React from "react";
import PropTypes from "prop-types";

import "./Table.css";

const TBody = ({ rowsContent }) => {
  return (
    <tbody>
      {rowsContent &&
        rowsContent.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.commerce}</td>
            <td>{data.cuit}</td>
            {data.concepts.map((concept, index) => (<td align="center" key={index}>{concept}</td>))}
            <td align="center">{data.currentBalance}</td>
            <td align="center">{data.active ? "Sí" : "No"}</td>
            <td align="center">{data.lastSale}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TBody;

TBody.propTypes = {
  rowsContent: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      commerce: PropTypes.string.isRequired,
      cuit: PropTypes.string.isRequired,
      concepts: PropTypes.arrayOf(PropTypes.number).isRequired,
      currentBalance: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired,
      lastSale: PropTypes.string.isRequired,
    })
  ),
};
