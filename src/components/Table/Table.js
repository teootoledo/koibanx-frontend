import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";
import debounce from "../../utils/debounce";

const SearchBar = ({ handleSearch }) => {
  const [filters, setFilters] = useState({
    fields: ["id", "cuit", "commerce"],
    active: "all",
  });

  return <Text>Table</Text>;
};

export default SearchBar;

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
