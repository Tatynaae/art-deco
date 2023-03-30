import {
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { MGrid } from "../../components/Motion";
import { blocksAnimation } from "../../shared/animation";
import { Telegram } from "../../shared/icons";

const Materials = () => {
  return (
    <Box
      component="section"
      pt="94px"
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
        >
          <MGrid
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={blocksAnimation}
            item
            lg={6}
            xs={12}
          >
            <Box
              backgroundColor="#383A44"
              borderRadius="25px"
              p={{
                xs: "25px 30px",
                lg: "40px 35px 40px 50px",
              }}
            >
              <Typography variant="h4">
                Декоративная лепнина{" "}
              </Typography>
              <Typography
                variant="subtitle2"
                mt={{ xs: 2, lg: 2.5 }}
                mb={{ xs: 2, lg: 2.5 }}
              >
                оптимальное решение для создания
                неповторимого и изысканного
                дизайна, из пенополистирола с
                защитным ультра прочным
              </Typography>
              {/*<Link to="/" className="link primary">*/}
              {/*  Смотреть фотографии*/}
              {/*</Link>*/}
              <Box
                display="flex"
                flexDirection={{
                  xs: "column",
                  lg: "row",
                }}
                mt={{ xs: 2, lg: 5 }}
                columnGap="14px"
                rowGap="15px"
                alignItems="center"
              >
                <div>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    mb={1.2}
                  >
                    Задайте вопрос ОНЛАЙН
                  </Typography>
                  <Button
                    href="https://api.whatsapp.com/send/?phone=996500027030&text&app_absent=0"
                    target="_blank"
                    sx={{
                      background: "#33DD88",
                      p: "12px 15px!important",
                      fontSize: "14px!important",
                      color: "#FFF",
                    }}
                    variant="contained"
                  >
                    <i
                      className="ri-whatsapp-line"
                      style={{ marginRight: 10 }}
                    />
                    Написать в WhatsApp
                  </Button>
                </div>
                <Typography variant="body2">
                  Или
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    mb={1.2}
                  >
                    Круглосуточно
                  </Typography>
                  <Box
                    display="flex"
                    columnGap="10px"
                    alignItems="center"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://t.me/+996500027030"
                    >
                      <Telegram />
                    </a>
                    <a
                      href="tel:+996 (500) 027 030"
                      className="link"
                    >
                      +996 (500) 027 030
                    </a>
                  </Box>
                </div>
              </Box>
            </Box>
          </MGrid>
          <MGrid
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={blocksAnimation}
            item
            lg={6}
            xs={12}
            sx={{
              height: "402px",
            }}
          >
            <Box
              backgroundColor="#383A44"
              borderRadius="25px"
              p={{
                xs: "25px 30px",
                lg: "40px 35px 40px 50px",
              }}
            >
              <Typography variant="h4">
                Термопанель «Сары-Таш»{" "}
              </Typography>
              <Typography
                variant="subtitle2"
                mt={2.5}
                mb={2.5}
              >
                панель , состоящий из
                теплоизоляционного листа «базальт»
                и декоративной плиты «Травертин»
              </Typography>
              {/*<Link to="/" className="link primary">*/}
              {/*  Смотреть фотографии*/}
              {/*</Link>*/}
              <Box
                display="flex"
                flexDirection={{
                  xs: "column",
                  lg: "row",
                }}
                mt={{ xs: 2, lg: 5 }}
                columnGap="14px"
                rowGap="15px"
                alignItems="center"
              >
                <div>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    mb={1.2}
                  >
                    Задайте вопрос ОНЛАЙН
                  </Typography>
                  <Button
                    href="https://api.whatsapp.com/send/?phone=996500027030&text&app_absent=0"
                    target="_blank"
                    sx={{
                      background: "#33DD88",
                      p: "12px 15px!important",
                      fontSize: "14px!important",
                      color: "#FFF",
                    }}
                    variant="contained"
                  >
                    <i
                      className="ri-whatsapp-line"
                      style={{ marginRight: 10 }}
                    />
                    Написать в WhatsApp
                  </Button>
                </div>
                <Typography variant="body2">
                  Или
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    mb={1.2}
                  >
                    Круглосуточно
                  </Typography>
                  <Box
                    display="flex"
                    columnGap="10px"
                    alignItems="center"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://t.me/+996500027030"
                    >
                      <Telegram />
                    </a>
                    <a
                      href="tel:+996 (500) 027 030"
                      className="link"
                    >
                      +996 (500) 027 030
                    </a>
                  </Box>
                </div>
              </Box>
            </Box>
          </MGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Materials;
