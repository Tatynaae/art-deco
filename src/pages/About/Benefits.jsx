import React from "react";
import { Box, Container } from "@mui/system";
import benefitsBg from "../../assets/images/about/feauture-bg.webp";
import {
  Button,
  Typography,
} from "@mui/material";
import { WhatsApp } from "../../shared/icons";
import {
  Mbox,
  MTypography,
} from "../../components/Motion";
import {
  blocksAnimation,
  textAnimation,
} from "../../shared/animation";

const Benefits = () => {
  return (
    <Box
      component="section"
      sx={{
        p: { xs: "50px 0", md: "70px 0", lg: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          width="100%"
          sx={{
            position: "relative",
            top: { xs: "0", lg: "105px" },
            background: {
              xs: "none",
              lg: `no-repeat url(${benefitsBg}) center/cover`,
            },
            p: { xs: 0, lg: "40px 0 53px 60px" },
            borderRadius: { xs: 0, lg: 3 },
          }}
        >
          <MTypography
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={textAnimation}
            variant="h1"
            mb={5}
          >
            При работе с нами{" "}
            <p className="bold">Вы получите:</p>
          </MTypography>
          <div>
            <Mbox
              initial="hidden"
              whileInView="visible"
              custom={1}
              variants={blocksAnimation}
              display="flex"
              alignItems="center"
            >
              <Box
                component="i"
                className="ri-check-line"
                sx={{
                  color: "#48C95F",
                  fontSize: { xs: 18, md: 24 },
                  mr: { xs: 2, lg: "20px" },
                }}
              />
              <Typography
                variant="subtitle1"
                maxWidth="644px"
                lineHeight="150%"
              >
                <span className="bold">
                  {" "}
                  Выразительный и индивидуальный
                  облик
                </span>{" "}
                Вашего дома (здания) по наиболее
                приемлемым ценам, так как наша
                компания является одним из лидеров
                среди производителей фасадного
                декора;
              </Typography>
            </Mbox>
            <Mbox
              initial="hidden"
              whileInView="visible"
              custom={2}
              variants={blocksAnimation}
              display="flex"
              mt={{ xs: 2, md: 4 }}
              mb={{ xs: 2, md: 4 }}
              alignItems="center"
            >
              <Box
                component="i"
                className="ri-check-line"
                sx={{
                  color: "#48C95F",
                  fontSize: { xs: 18, md: 24 },
                  mr: { xs: 2, lg: "20px" },
                }}
              />
              <Typography
                variant="subtitle1"
                maxWidth="644px"
                lineHeight="150%"
              >
                <span className="bold">
                  {" "}
                  Сэкономленное время и сдачу
                  объекта в установленные сроки
                </span>{" "}
                — так как большой выбор готовых
                декоративных элементов из нашего
                каталога уже ждет своего
                покупателя на складе компании;
              </Typography>
            </Mbox>
            <Mbox
              display="flex"
              initial="hidden"
              whileInView="visible"
              custom={3}
              variants={blocksAnimation}
              alignItems="center"
            >
              <Box
                component="i"
                className="ri-check-line"
                sx={{
                  color: "#48C95F",
                  fontSize: { xs: 18, md: 24 },
                  mr: { xs: 2, lg: "20px" },
                }}
              />
              <Typography
                variant="subtitle1"
                maxWidth="644px"
                lineHeight="150%"
              >
                <span className="bold">
                  {" "}
                  Реализованные фантазии и
                  воплощенные проекты
                </span>{" "}
                – так как мы изготавливаем изделия
                по эскизам и чертежам заказчика;
              </Typography>
            </Mbox>
          </div>
          <Box
            display="flex"
            mt={{ xs: 4, md: 6.2 }}
            alignItems="center"
            columnGap="30px"
            rowGap="15px"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
          >
            <Button
              size="medium"
              color="primary"
              variant="contained"
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Оставить заявку
            </Button>
            <Typography variant="subtitle1">
              Или
            </Typography>
            <Box
              display="flex"
              component="a"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=996500027030&text&app_absent=0"
              alignItems="center"
            >
              <WhatsApp />

              <Typography
                variant="subtitle2"
                ml={2}
              >
                Узнать стоимость в WhatsApp
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;
