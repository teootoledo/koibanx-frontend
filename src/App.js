import React, { useState } from "react";
import "./App.css";

import { fetchData } from "./services/fetchData";

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

  return <div className="App">Challenge Koibanx</div>;
}

export default App;
