import React, { createContext, useState, useCallback, useEffect } from "react";
import debounce from "../utils/debounce";
import fetchData from "../services/fetchData";

export const TableContext = createContext();

const TableProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    active: "all",
    fields: ["cuit", "id", "commerce"],
    input: "",
    order: { field: "commerce", direction: 1 },
  });

  const [pagination, setPagination] = useState({
    currentPage: 1,
    rowsPerPage: 10,
    totalPages: 10,
  });

  const [tableContent, setTableContent] = useState([]);

  const getContent = () => tableContent;
  const getFilters = () => filters;
  const getOrder = () => filters.order;
  const getPagination = () => pagination;

  const setFiltersValue = (value) => { setFilters({ ...filters, ...value }); };
  const setOrder = (order) => { setFilters({ ...filters, order }); };
  const setPaginationValue = (value) => { setPagination((prevState) => { return { ...prevState, ...value }; });};

  const handleSearch = async (filters, pagination) => {
    let response;
    try { response = await fetchData(filters, pagination); } 
    catch (error) { console.error(error); }
    
    setTableContent(response.data);
    setPaginationValue({ totalPages: response.pages });
  };

  const optimizedSearch = useCallback( debounce((filters, pagination) => handleSearch(filters, pagination)), []);

  useEffect(() => { optimizedSearch(filters, pagination); }, [filters, pagination.currentPage, pagination.rowsPerPage]);

  return (
    <TableContext.Provider
      value={{
        getContent,
        getFilters,
        getOrder,
        getPagination,
        setFiltersValue,
        setOrder,
        setPaginationValue,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
