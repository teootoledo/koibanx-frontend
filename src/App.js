import React, { useState } from "react";
import { VStack, Heading, Spacer } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import "./App.css";

import fetchData from "./services/fetchData";

// Filters
/*
{
  "filters": ["cuit", "id", "commerce"],
  "input": "Blockbuster"
  "active": null | true | false,
  "order": { "field": "commerce", "direction": 1 | -1 },
}
*/

function App() {
  const [tableContent, setTableContent] = useState([]);

  const triggerSearch = async ({ filters }) => {
    let response;
    try {
      response = await fetchData({ filters });
    } catch (error) {
      console.error(error);
    }
    setTableContent(response);
  };

  const handleSort = (field, direction) => {};

  return (
    <VStack>
      <Heading>Koibanx frontend challenge</Heading>
      <SearchBar handleSearch={triggerSearch} />
      <Table handleSort={handleSort} />
    </VStack>
  );
}

export default App;
