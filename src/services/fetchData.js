import mockedData from "../mock/mockedData.js";
import API from "../mock/api";

const fetchData = async (filters, pagination) => {
  if (!API) {
    throw new Error("API_URL_NOT_FOUND");
  }

  let query = API;

  // Mapeo de los filtros para armar la query
  let selectedFilters = filters.fields.map(
    (field) => `{${field}: "${filters.input}"}`
  );

  // Armo la query
  query +=
    filters.active === "all"
      ? `?q={"$or":[${selectedFilters}]}`
      : filters.active === "active"
      ? `?q={"$and":[{"active": 1},{"$or":[${selectedFilters}]}]}`
      : `?q={"$and":[{"active": 0},{"$or":[${selectedFilters}]}]}`;

  // Preparo las hints si existe order y lo agrego a la query
  let hints;
  if (filters.order) {
    hints = `&h={"$orderby": {"${filters.order.field}": ${filters.order.direction}}}`;
    query += hints;
  }

  // Preparo la paginacion
  const skip = (pagination.currentPage - 1) * pagination.rowsPerPage;
  const max = pagination.rowsPerPage;
  query += `&max=${max}&skip=${skip}`;

  console.log("Petición a URL: ", query);

  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulates the load

  return {
    data: mockedData,
    page: 1,
    pages: 5,
    rowsPerPage: 4,
    total: 20,
    query: query,
  };
};

export default fetchData;
