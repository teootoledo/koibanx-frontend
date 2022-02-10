import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import TableProvider from "./context/TableContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <TableProvider>
        <App />
      </TableProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
