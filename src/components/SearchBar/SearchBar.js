import React, { useState } from "react";
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
        <RadioGroup colorScheme="purple">
          {/* <RadioGroup onChange={setValue} value={value} colorScheme="purple"> */}
          <Stack direction="row" spacing={5}>
            <Radio value={true}>Activos</Radio>
            <Radio value={false}>Inactivos</Radio>
            <Radio value={null}>Todos</Radio>
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
