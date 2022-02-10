import React, { useState } from "react";
import { VStack, Heading } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
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

  const handleSearch = async ({ filters }) => {
    let response;

    try {
      response = await fetchData({ filters });
    } catch (error) {
      console.error(error);
    }

    setTableContent(response);
  };

  return (
    <VStack>
      <Heading>Koibanx frontend challenge</Heading>
      <SearchBar handleSearch={handleSearch} />
    </VStack>
  );
}

export default App;
