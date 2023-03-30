import {Container} from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect} from "react";
import { MTypography } from "../../components/Motion";
import { textAnimation } from "../../shared/animation";
import CatalogProduct from "./Catalog-Product";

const Catalog = ({ home }) => {
  return (
    <section>
      <Container maxWidth="xl">
        {home && (
          <MTypography
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            variant="h1"
            mb={10}
            mt={10}
            textAlign="center"
            component="h2"
            fontWeight="600"
          >
            Каталог фасадных камней и декора
          </MTypography>
        )}
        <Box
        >
            <CatalogProduct />
        </Box>
      </Container>
    </section>
  );
};

export default Catalog;
