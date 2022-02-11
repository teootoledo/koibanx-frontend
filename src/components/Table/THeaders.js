import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TableContext } from "../../context/TableContext";
import "./Table.css";

const THeaders = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header) => header.sortable ? (
            <HSortable
              header={header.label}
              id={header.field}
              key={header.field}
            />
          ) : (
            <th 
              className="table-headers"
              id={header.field} 
              key={header.field}>
              {header.label}
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

export default THeaders;

THeaders.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sortable: PropTypes.bool.isRequired,
    })
  ),
}

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

HSortable.propTypes = {
  header: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
