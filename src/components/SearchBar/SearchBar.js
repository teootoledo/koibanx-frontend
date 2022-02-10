import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Stack,
  VStack,
  HStack,
  Input,
  CheckboxGroup,
  Checkbox,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";

const SearchBar = ({ handleSearch }) => {
  const [filters, setFilters] = useState({
    fields: ["id", "cuit", "commerce"],
    active: "all",
  });

  const setTextFilters = (selecteds) => {
    setFilters({
      ...filters,
      fields: selecteds,
    });
    console.log(selecteds);
  };

  const setActiveFilter = (selected) => {
    setFilters({
      ...filters,
      active: selected,
    });
    console.log(selected);
  };

  // UseEffect cuando cambia filters
  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <HStack
      spacing={10}
      backgroundColor={"#f3f2ff"}
      padding="5"
      borderRadius={15}
    >
      <VStack spacing={2}>
        <Input placeholder="Search" variant={"outlined"} />
        <CheckboxGroup
          colorScheme="purple"
          defaultValue={["id", "commerce", "cuit"]}
          onChange={setTextFilters}
        >
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Checkbox value="id">ID</Checkbox>
            <Checkbox value="commerce">Comercio</Checkbox>
            <Checkbox value="cuit">CUIT</Checkbox>
          </Stack>
        </CheckboxGroup>
      </VStack>
      <VStack align>
        <Text color={"#565656"}>Otros filtros</Text>
        <RadioGroup
          colorScheme="purple"
          onChange={setActiveFilter}
          value={filters.active}
        >
          <Stack direction="row" spacing={5}>
            <Radio value="active">Activos</Radio>
            <Radio value="inactive">Inactivos</Radio>
            <Radio value="all">Todos</Radio>
          </Stack>
        </RadioGroup>
      </VStack>
    </HStack>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
