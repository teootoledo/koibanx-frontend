import React, { createContext, useState, useCallback, useEffect } from "react";
import fetchData from "../services/fetchData";
import debounce from "../utils/debounce";

export const TableContext = createContext();

const TableProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    fields: ["cuit", "id", "commerce"],
    input: "",
    active: "all",
    order: { field: "commerce", direction: 1 },
  });
  const [tableContent, setTableContent] = useState([]);

  const getFilters = () => filters;

  const setFiltersValue = (value) => {
    setFilters({ ...filters, ...value });
  };

  const setOrder = (order) => {
    setFilters({ ...filters, order });
  };

  const getOrder = () => filters.order;

  const handleSearch = async ({ filters, order }) => {
    let response;
    try {
      filters
        ? (response = await fetchData({ filters, order: filters.order }))
        : (response = await fetchData({}));
    } catch (error) {
      console.error(error);
    }
  };

  const optimizedSearch = useCallback(
    debounce((filters) => handleSearch({ filters })),
    []
  );

  useEffect(() => {
    console.log(filters);
    optimizedSearch(filters);
  }, [filters]);

  return (
    <TableContext.Provider
      value={{ getFilters, setFiltersValue, setOrder, getOrder }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
