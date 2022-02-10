import React, { useState } from "react";
import PropTypes from "prop-types";
import debounce from "../../utils/debounce";
import THeaders from "./THeaders";
import TBody from "./TBody";

import "./Table.css";

const Table = ({ handleSort }) => {
  const headers = [
    "ID",
    "CUIT",
    "Comercio",
    "Concepto 1",
    "Concepto 2",
    "Concepto 3",
    "Concepto 4",
    "Concepto 5",
    "Concepto 6",
    "Balance actual",
    "Activo",
    "Última venta",
  ];
  const sortables = ["CUIT", "Comercio"];

  return (
    <div className="table">
      <table>
        <THeaders headers={headers} sortables={sortables} />
        <TBody />
      </table>
    </div>
  );
};

export default Table;

Table.propTypes = {
  handleSort: PropTypes.func.isRequired,
};
