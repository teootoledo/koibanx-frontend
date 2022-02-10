import React from "react";
import PropTypes from "prop-types";

import "./Table.css";

const THeaders = ({ headers, sortables }) => {
  return (
    <thead>
      <tr>
        {headers.map((header) =>
          sortables.includes(header) ? (
            <th className="table-headers sortable" key={header.toLowerCase}>
              {header}
            </th>
          ) : (
            <th className="table-headers" key={header.toLowerCase}>
              {header}
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

export default THeaders;

THeaders.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortables: PropTypes.arrayOf(PropTypes.string),
};
