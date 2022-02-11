import React, { useContext } from "react";
import THeaders from "./THeaders";
import TBody from "./TBody";
import Pagination from "../Pagination";
import { TableContext } from "../../context/TableContext";
import headers from "../../mock/headers";

import "./Table.css";

const Table = () => {
  const { getContent, setPaginationValue, getPagination } = useContext(TableContext);

  return (
    <div className="table">
      <table cellPadding={"10px"}>
        <THeaders headers={headers} />
        <TBody rowsContent={getContent()} />
      </table>
      <Pagination
        currentPage={getPagination().currentPage}
        neighbourNumbers={1}
        onPageChange={(page) => setPaginationValue({ currentPage: page })}
        onRowPerPageChange={(rowsPerPage) => setPaginationValue({ rowsPerPage }) }
        totalPages={getPagination().totalPages}
      />
    </div>
  );
};

export default Table;
