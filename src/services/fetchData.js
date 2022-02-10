const fetchData = async ({ filters }) => {
  // Mapeo de los filtros para armar la query
  const selectedFilters = filters.fields.map(
    (field) => `{${field}: "${filters.input}"}`
  );

  // Armo la query
  let query =
    filters.active === null
      ? `?={"$or": [${selectedFilters}]}`
      : filters.active
      ? `?={"$and": [{"active": 1}, {"$or": [${selectedFilters}]}]}`
      : `?={"$and": [{"active": 0}, {"$or": [${selectedFilters}]}]}`;

  // Preparo las hints si existe order y lo agrego a la query
  let hints;
  if (filters.order) {
    hints = `&={"$orderby": {"${filters.order.field}": ${filters.order.direction}}}`;
    query += hints;
  }

  console.log("GET", query);
};

export default fetchData;
