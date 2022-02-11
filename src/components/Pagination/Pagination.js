import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { HStack, Select, Text, VStack } from "@chakra-ui/react";

import "./Pagination.css";

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  onRowPerPageChange,
  neighbourNumbers,
}) => {
  // Oculto números de página si son demasiados
  const startPage = currentPage - neighbourNumbers;
  const endPage = currentPage + neighbourNumbers;
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    if (i > 0 && i <= totalPages) {
      pages.push(i);
    }
  }

  const isFirstPageVisible = () => pages.includes(1);
  const isLastPageVisible = () => pages.includes(totalPages);

  useEffect(() => {
    if (currentPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [totalPages, currentPage, onPageChange]);

  return (
    <HStack
      spacing={5}
      backgroundColor={"#f3f2ff"}
      padding="5"
      borderRadius={15}
    >
      <ul className={"pagination"}>
        {!isFirstPageVisible() && (
          <li
            key={1}
            className={
              currentPage === 1 ? "paginationItem active" : "paginationItem"
            }
            onClick={() => onPageChange(1)}
          >
            {1}
          </li>
        )}
        {!isFirstPageVisible() && (
          <li className={"paginationItem disabled"}>...</li>
        )}
        {pages.map((page) => (
          <li
            key={page}
            className={
              currentPage === page ? "paginationItem active" : "paginationItem"
            }
            onClick={() => onPageChange(page)}
          >
            <a>{page}</a>
          </li>
        ))}
        {!isLastPageVisible() && (
          <li className={"paginationItem disabled"}>...</li>
        )}
        {!isLastPageVisible() && (
          <li
            key={totalPages}
            className={
              currentPage === totalPages
                ? "paginationItem active"
                : "paginationItem"
            }
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </li>
        )}
      </ul>
      <VStack minWidth={"fit-content"}>
        <Text>Resultados por página</Text>

        <Select
          variant={"outlined"}
          placeholder="Selecciona una opción"
          defaultValue={10}
          onChange={(e) => onRowPerPageChange(parseInt(e.target.value))}
        >
          <option value={5}>5 elementos</option>
          <option value={10}>10 elementos</option>
          <option value={30}>30 elementos</option>
        </Select>
      </VStack>
    </HStack>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  neighbourNumbers: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  onPageChange: () => {},
};

export default Pagination;
