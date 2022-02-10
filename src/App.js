import React, { useState } from "react";
import { VStack, Heading, Spacer } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import "./App.css";

import fetchData from "./services/fetchData";

// Filters
/*
{
  "fields": ["cuit", "id", "commerce"],
  "input": ""
  "active": "all" | "active" | "inactive"
  "order": { "field": "commerce", "direction": 1 | -1 },
}
*/

function App() {
  const [activeFilters, setActiveFilters] = useState({
    filters: ["cuit", "id", "commerce"],
    input: "",
    active: "all",
  });

  const [tableContent, setTableContent] = useState([
    {
      id: 1,
      cuit: "20-25252525-2",
      commerce: "Blockbuster",
      concepts: [
        "Concepto 1",
        "Concepto 2",
        "Concepto 3",
        "Concepto 4",
        "Concepto 5",
        "Concepto 6",
      ],
      current_balance: "100.00",
      active: true,
      last_sale: "2020-01-01",
    },
  ]);

  const triggerSearch = async ({ filters, order }) => {
    let response;
    try {
      filters
        ? (response = await fetchData({ filters, order: activeFilters.order }))
        : (response = await fetchData({}));
    } catch (error) {
      console.error(error);
    }

    setActiveFilters({ ...activeFilters, filters, order });
  };

  const handleSort = (e) => {
    let order;
    e.currentTarget.className === "table-headers sortable sorted"
      ? (order = { field: e.currentTarget.id, direction: -1 })
      : (order = { field: e.currentTarget.id, direction: 1 });

    triggerSearch({ order });
  };

  return (
    <VStack>
      <Heading>Koibanx frontend challenge</Heading>
      <SearchBar handleSearch={triggerSearch} />
      <Table handleSort={handleSort} tableContent={tableContent} />
    </VStack>
  );
}

export default App;
