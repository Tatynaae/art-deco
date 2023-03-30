import { Box, Typography } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      mb={{ xs: 2, lg: 4 }}
    >
      <Typography variant="subtitle2">
        Найдено: <span className="primary">214</span>
      </Typography>
      <Box display="flex" alignItems="center">
        <input
          type="text"
          placeholder="Введите номер модели"
          className="text-field bdrs"
        />
        <Box
          sx={{
            height: "100%",
            p: "10px",
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(180deg, #FFD15B 0%, #FDC841 100%)",
          }}
        >
          <i className="ri-search-line" />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
