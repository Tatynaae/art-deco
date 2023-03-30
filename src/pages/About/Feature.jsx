import React from "react";
import { Box, Container } from "@mui/system";
import featureBg from "../../assets/images/about/benefits-bg.webp";
import { Typography } from "@mui/material";
import Close from "../../assets/images/close";
import {
  Mbox,
  MTypography,
} from "../../components/Motion";
import {
  blocksAnimation,
  textAnimation,
} from "../../shared/animation";

const Feature = () => {
  return (
    <Box
      component="section"
      pt="100px"
      pb="100px"
      sx={{
        background: {
          xs: `no-repeat url(${featureBg}) bottom/contain`,
          lg: `no-repeat url(${featureBg}) right/contain`,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          mb: { xs: "250px", md: "424px", lg: 0 },
        }}
      >
        <MTypography
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={textAnimation}
          variant="h2"
          maxWidth="770px"
        >
          Главная особенность нашего декора — это{" "}
          <span className="primary bold">
            применение пенополистирола
          </span>
        </MTypography>
        <MTypography
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={textAnimation}
          fontSize={{ xs: 16, md: "20px" }}
          mt={{ xs: 2, md: 1.2 }}
          mb={{ xs: 2.5, md: 5 }}
        >
          с великолепными прочностными
          характеристиками, исключающими
        </MTypography>
        <Box
          display="flex"
          flexDirection="column"
          rowGap="16px"
        >
          {array.map((item, idx) => (
            <Mbox
              initial="hidden"
              whileInView="visible"
              custom={idx}
              variants={blocksAnimation}
              display="flex"
              alignItems="center"
            >
              <Close />
              <Typography
                ml={{ xs: 1.2, md: "20px" }}
                fontSize={{ xs: 14, md: "20px" }}
              >
                {item}
              </Typography>
            </Mbox>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;

const array = [
  "появление трещин",
  "сколов",
  "осыпаний при различных условиях эксплуатации",
  "признан экологически чистым материалом",
  "не выделят вредные вещества",
];
