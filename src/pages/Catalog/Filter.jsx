import {
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SearchBar from "./SearchBar";

const Filter = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("992"));
  const md = useMediaQuery(theme.breakpoints.down("768"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
      width={{ xs: "100%", lg: "23.7%" }}
    >
      {lg && <SearchBar />}

      {!lg ? (
        <Button variant="outlined" size="medium" color="secondary">
          Сбросить фильтры
        </Button>
      ) : (
        <Box
          sx={{
            height: "47px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(180deg, #FFD15B 0%, #FDC841 100%)",
            color: "#1E1F25",
            fontWeight: 700,
            mb: 3,
          }}
        >
          Основные фильтры
        </Box>
      )}
      {!lg && (
        <Chip
          label="от 120 тыс. сом до 160 тыс. сом"
          color="primary"
          sx={{ mt: 2, mb: 4, "& span": { color: "#000!important" } }}
          onDelete={handleDelete}
          deleteIcon={<i className="ri-close-fill" />}
        />
      )}
      {!lg ? (
        <Box
          sx={{
            height: "47px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(180deg, #FFD15B 0%, #FDC841 100%)",
            color: "#1E1F25",
            fontWeight: 700,
            mb: 3,
          }}
        >
          Основные фильтры
        </Box>
      ) : (
        <Button variant="outlined" size="medium" color="secondary">
          Сбросить фильтры
        </Button>
      )}
      {lg && (
        <Chip
          label="от 120 тыс. сом до 160 тыс. сом"
          color="primary"
          sx={{ mt: 2, mb: 4, "& span": { color: "#000!important" } }}
          onDelete={handleDelete}
          deleteIcon={<i className="ri-close-fill" />}
        />
      )}

      {!lg && (
        <Box
          width="100%"
          sx={{
            "& .MuiCheckbox-root": {
              p: "5px",
              color: "#F3CD8200!important",
            },

            "& .MuiRadio-root": {
              p: "5px",
            },

            "& .MuiFormControlLabel-root": {
              ml: -1,
            },
          }}
        >
          <Box
            p="0 19px"
            sx={{ borderBottom: "1px solid #E9E9E9", pb: "26px" }}
          >
            <Typography variant="subtitle2" mb={0.2}>
              Популярные категории
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Арпен"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Арка"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Замковые камни"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Подоконники"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Готовые комплекты окна"
              />
            </FormGroup>
          </Box>
          <Box
            p="0 19px"
            sx={{ borderBottom: "1px solid #E9E9E9", pb: "26px" }}
            mt={3}
          >
            <Typography variant="subtitle2" mb={0.2}>
              Cтоимость
            </Typography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="до 80 тыс. сом"
                control={<Radio />}
                label="до 80 тыс. сом"
              />
              <FormControlLabel
                value="от 80 тыс. сом до 120 тыс. сом"
                control={<Radio />}
                label="от 80 тыс. сом до 120 тыс. сом"
              />
              <FormControlLabel
                value="от 120 тыс. сом до 160 тыс. сом"
                control={<Radio />}
                label="от 120 тыс. сом до 160 тыс. сом"
              />
              <FormControlLabel
                value="от 160 тыс. сом до 200 тыс. сом "
                control={<Radio />}
                label="от 160 тыс. сом до 200 тыс. сом "
              />
              <FormControlLabel
                value="от 200 тыс. сом до 250 тыс. сом"
                control={<Radio />}
                label="от 200 тыс. сом до 250 тыс. сом"
              />
              <FormControlLabel
                value="от 250 тыс. сом до 300 тыс. сом"
                control={<Radio />}
                label="от 250 тыс. сом до 300 тыс. сом"
              />
            </RadioGroup>
          </Box>
          <Box
            p="0 19px"
            sx={{ borderBottom: "1px solid #E9E9E9", pb: "26px" }}
            mt={3}
          >
            <Typography variant="subtitle2" mb={0.2}>
              Стиль
            </Typography>
            <RadioGroup name="">
              <FormControlLabel
                value="Стиль 1"
                control={<Radio />}
                label="Стиль 1"
              />
              <FormControlLabel
                value="Стиль 2"
                control={<Radio />}
                label="Стиль 2"
              />
            </RadioGroup>
          </Box>
          <Box
            p="0 19px"
            sx={{ borderBottom: "1px solid #E9E9E9", pb: "26px" }}
            mt={3}
          >
            <Typography variant="subtitle2" mb={0.2}>
              Формат
            </Typography>
            <RadioGroup name="">
              <FormControlLabel
                value="Формат 1"
                control={<Radio />}
                label="Формат 1"
              />
              <FormControlLabel
                value="Формат 2"
                control={<Radio />}
                label="Формат 2"
              />
            </RadioGroup>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Filter;
