import React from "react";
import { VStack, Heading } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import "./App.css";

function App() {
  return (
    <VStack>
      <Heading>Koibanx frontend challenge</Heading>
      <SearchBar />
      <Table />
    </VStack>
  );
}

export default App;
