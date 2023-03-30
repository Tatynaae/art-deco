import React from "react";
import { Box } from "@mui/system";
import homeBg from "../../assets/images/mainPhoto.jpg";
import Checkmark from "../../assets/images/checkmark";
import {
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import {
  Mbox,
  MGrid,
  MTypography,
} from "../../components/Motion";
import {
  blocksAnimation,
  textAnimation,
} from "../../shared/animation";

const FirstScreen = () => {
  return (
    <Mbox
      initial="hidden"
      whileInView="visible"
      component="section"
      className={"heroSection"}
      sx={{
        pt: {
          xs: "132px",
          md: "164px",
          lg: "194px",
        },
        pb: {
          xs: "139px",
          md: "207px",
          lg: "170px",
        },
        background: `no-repeat  url(${homeBg}) center/cover`,
        zIndex: -1,
      }}
    >
      <Container maxWidth="xl">
        <Box
          width={{ xs: "100%", md: "657px" }}
          sx={{
            zIndex: 3,
            position: "relative",
          }}
        >
          <MTypography
            custom={1}
            // variants={textAnimation}
            variant="h1"
            sx={{
              mb: { xs: "10px", lg: "10px" },
            }}
          >
            <span className="boldFont">
              Производим:
            </span>
            <br />
          </MTypography>
          <MTypography
            custom={1}
            width={{ md: "132.69%" }}
          >
            <Typography
              // variants={textAnimation}
              variant="h1"
              lineHeight={{
                xs: "130%",
                md: "112.69%",
              }}
              className="list-item2"
            >
              Фасадные декоративные элементы из
              пенополистирола
            </Typography>
            <Typography
              variants={textAnimation}
              variant="h1"
              lineHeight={{
                xs: "130%",
                md: "112.69%",
              }}
              className="list-item"
            >
              Термопанели
            </Typography>
            <Typography
              variants={textAnimation}
              variant="h1"
              lineHeight={{
                xs: "130%",
                md: "112.69%",
              }}
              className="list-item"
            >
              Декоративные камни
            </Typography>
          </MTypography>
          <Grid
            container
            sx={{
              "& h6": {
                maxWidth: 210,
              },
            }}
            spacing={{ xs: 2, md: 4 }}
            mt={{ xs: 3, md: 0.1 }}
            mb={5}
          >
            <MGrid
              custom={1}
              variants={blocksAnimation}
              item
              lg={6}
              display="flex"
              alignItems={{
                xs: "start",
                md: "center",
              }}
            >
              <Checkmark />
              <Typography
                variant="subtitle2"
                ml={2}
              >
                Легкость конструкции и
                одновременно прочность
              </Typography>
            </MGrid>
            <MGrid
              custom={2}
              variants={blocksAnimation}
              item
              lg={6}
              display="flex"
              alignItems="center"
            >
              <Checkmark />
              <Typography
                variant="subtitle2"
                ml={2}
              >
                Ценовая доступность
              </Typography>
            </MGrid>
            <MGrid
              custom={3}
              variants={blocksAnimation}
              item
              lg={6}
              display="flex"
              alignItems={{
                xs: "start",
                md: "center",
              }}
            >
              <Checkmark />
              <Typography
                variant="subtitle2"
                ml={2}
              >
                Влагоустойчивость, устойчивость к
                температурному режиму
              </Typography>
            </MGrid>
            <MGrid
              custom={4}
              variants={blocksAnimation}
              item
              lg={6}
              display="flex"
              alignItems={{
                xs: "start",
                md: "center",
              }}
            >
              <Checkmark />
              <Typography
                variant="subtitle2"
                ml={2}
              >
                Простота в креплении элементов
                декора и удобная транспортировка
              </Typography>
            </MGrid>
          </Grid>
          <Button
            size="large"
            href="tel:+996 (500) 027 030"
            color="primary"
            variant="contained"
          >
            Позвонить
          </Button>
        </Box>
      </Container>
    </Mbox>
  );
};

export default FirstScreen;
