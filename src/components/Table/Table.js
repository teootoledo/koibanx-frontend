import React from "react";
import PropTypes from "prop-types";
import THeaders from "./THeaders";
import TBody from "./TBody";
import headers from "../../mock/headers";

import "./Table.css";

const Table = ({ handleSort, tableContent }) => {
  return (
    <div className="table">
      <table>
        <THeaders headers={headers} />
        <TBody rowsContent={tableContent} />
      </table>
    </div>
  );
};

export default Table;

Table.propTypes = {
  handleSort: PropTypes.func.isRequired,
  tableContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};
