const headers = [
  { label: "ID", field: "id", sortable: false },
  { label: "Comercio", field: "commerce", sortable: true },
  { label: "CUIT", field: "cuit", sortable: true },
  { label: "Concepto 1", field: "concepts[1]", sortable: false },
  { label: "Concepto 2", field: "concepts[2]", sortable: false },
  { label: "Concepto 3", field: "concepts[3]", sortable: false },
  { label: "Concepto 4", field: "concepts[4]", sortable: false },
  { label: "Concepto 5", field: "concepts[5]", sortable: false },
  { label: "Concepto 6", field: "concepts[6]", sortable: false },
  { label: "Balance actual", field: "current_balance", sortable: false },
  { label: "Activo", field: "active", sortable: false },
  { label: "Última venta", field: "last_sale", sortable: false },
];
export default headers;
