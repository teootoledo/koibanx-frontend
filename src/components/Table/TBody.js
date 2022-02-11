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
            {data.concepts.map((concept, index) => (
              <td align="center" key={index}>
                {concept}
              </td>
            ))}
            <td align="center">{data.currentBalance}</td>
            <td align="center">{data.active ? "Sí" : "No"}</td>
            <td align="center">{data.lastSale}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TBody;

TBody.propTypes = {};
