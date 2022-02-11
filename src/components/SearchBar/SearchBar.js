import React, { useContext } from "react";
import {
  Checkbox,
  CheckboxGroup,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TableContext } from "../../context/TableContext";

const SearchBar = () => {
  const { setFiltersValue: setFilters, getFilters: filters } = useContext(TableContext);

  const setInputFilter = (e) => { setFilters({ input: e.target.value }); };
  const setTextFilters = (selecteds) => { setFilters({ fields: selecteds }); };
  const setActiveFilter = (selected) => { setFilters({ active: selected }); };

  return (
    <HStack
      backgroundColor={"#f3f2ff"}
      borderRadius={15}
      padding="5"
      spacing={10}
    >
      <VStack spacing={2}>
        <Input
          onChange={setInputFilter}
          placeholder="Search"
          variant={"outlined"}
        />
        <CheckboxGroup
          colorScheme="purple"
          defaultValue={["id", "commerce", "cuit"]}
          onChange={setTextFilters}
        >
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Checkbox value="commerce">Comercio</Checkbox>
            <Checkbox value="cuit">CUIT</Checkbox>
            <Checkbox value="id">ID</Checkbox>
          </Stack>
        </CheckboxGroup>
      </VStack>
      <VStack align>
        <Text color={"#565656"}>Otros filtros</Text>
        <RadioGroup
          colorScheme="purple"
          defaultValue="all"
          onChange={setActiveFilter}
          value={filters.active}
        >
          <Stack direction="row" spacing={5}>
            <Radio value="active">Activos</Radio>
            <Radio value="all">Todos</Radio>
            <Radio value="inactive">Inactivos</Radio>
          </Stack>
        </RadioGroup>
      </VStack>
    </HStack>
  );
};

export default SearchBar;
