import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { TableContext } from "../../context/TableContext";
import "./Table.css";

const THeaders = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header) =>
          header.sortable ? (
            <HSortable
              key={header.field}
              id={header.field}
              header={header.label}
            />
          ) : (
            <th id={header.field} key={header.field} className="table-headers">
              {header.label}
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

export default THeaders;

const HSortable = ({ header, id }) => {
  const { setOrder, getOrder } = useContext(TableContext);

  const toggleDirection = () => {
    setOrder({ field: id, direction: getOrder().direction === 1 ? -1 : 1 });
  };

  return (
    <th
      id={id}
      key={header}
      onClick={toggleDirection}
      className="table-headers sortable"
    >
      {header}{" "}
      {getOrder().field === id && (
        <span>{getOrder().direction === -1 ? "↓" : "↑"}</span>
      )}
    </th>
  );
};
