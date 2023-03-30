/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Instagram,
  Telegram,
  WhatsApp,
} from "./icons";
import shop from "../assets/DSC03725.webp";
import office from "../assets/def.webp";
import instagram from "../assets/images/contacts/img.png";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const lg = useMediaQuery(
    theme.breakpoints.down("992")
  );
  const md = useMediaQuery(
    theme.breakpoints.down("768")
  );
  return (
    <Box
      component="footer"
      backgroundColor="#191A1F"
      pt="50px"
    >
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          component="h2"
          fontWeight="600"
          mb={{ xs: 2.5, lg: 4 }}
        >
          Наши контакты
        </Typography>
        <Grid
          container
          spacing={{ xs: 3, lg: 4 }}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Typography
              variant="h6"
              fontSize={{ xs: "14px", md: 20 }}
              fontWeight="500"
              mb={2}
            >
              Телефон
            </Typography>
            <Typography
              variant="h3"
              fontWeight="600"
              fontSize={{ xs: 20, lg: 30 }}
              mb={{ xs: 5, md: "68px", lg: 5 }}
            >
              <a href="tel:+996 (500) 027 030">
                +996 (500) 027 030
              </a>{" "}
              <br />
              <a href="tel:+996 (555) 027 030">
                +996 (555) 027 030
              </a>{" "}
              <br />
              <a href="tel:+996 (775) 027 030">
                +996 (775) 027 030
              </a>
            </Typography>
            <Box
              display="flex"
              sx={{ columnGap: "31px" }}
            >
              <div>
                <Typography
                  variant="subtitle2"
                  mb={2}
                  fontWeight="500"
                >
                  Рабочий график: с 09:00 - 18:00{" "}
                  <br />
                  Выходной: Пятница
                </Typography>
              </div>
              {md && (
                <div>
                  <Typography
                    variant="subtitle2"
                    mb={2}
                    fontWeight="500"
                  >
                    Мы в соц. сетях
                  </Typography>
                  <Box
                    display="flex"
                    sx={{
                      columnGap: "20px",
                    }}
                  >
                    <a
                      href="https://www.instagram.com/ART_DECO_BISHKEK_/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Instagram />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send/?phone=996500027030&text&app_absent=0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsApp />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://t.me/+996500027030"
                    >
                      <Telegram />
                    </a>
                  </Box>
                </div>
              )}
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Typography
              variant="h6"
              fontSize={{ xs: "16px", md: 20 }}
              mb={2}
              fontWeight="500"
            >
              Ждем вас в офисе
            </Typography>
            <Box
              display="flex"
              alignItems="center"
            >
              <img
                src={shop}
                style={{ marginRight: 20 }}
                width={
                  md
                    ? "47%"
                    : lg
                    ? "135px"
                    : "125px"
                }
                height={md ? "114px" : "90px"}
                alt=""
              />
              <img
                src={office}
                width={
                  md
                    ? "50%"
                    : lg
                    ? "135px"
                    : "125px"
                }
                height={md ? "114px" : "90px"}
                alt=""
              />
            </Box>
            {!md && (
              <>
                <Typography
                  variant="subtitle2"
                  mt={4}
                  mb={2}
                  fontWeight="500"
                >
                  Мы в месенджерах
                </Typography>
                <Box
                  display="flex"
                  sx={{
                    columnGap: "20px",
                  }}
                >
                  <a
                    href="https://www.instagram.com/ART_DECO_BISHKEK_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=996500027030&text&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsApp />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/+996500027030"
                  >
                    <Telegram />
                  </a>
                </Box>
              </>
            )}
          </Grid>
          <Grid
            item
            lg={4}
            md={12}
            xs={12}
          >
            <Typography
              variant="h6"
              mb={2}
              fontWeight="500"
            >
              Приезжайте к нам в офис
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.804980680468!2d74.59600910228792!3d42.901668282975635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb8016aa936af%3A0x69f1f6dbcc3fffe0!2zMjMwINGD0LsuINCi0L7Qs9C-0LvQvtC6INCc0L7Qu9C00L4sINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1652797510673!5m2!1sru!2skg"
              width="100%"
              height="214px"
              style={{
                borderRadius: "7px",
                border: "none",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          pt={9}
        >
          {!lg && (
            <Grid
              item
              lg={2.4}
            >
              <img
                src={logo}
                alt=""
              />
              <Typography fontSize="13px">
                Декоративное <br /> искусство
              </Typography>
            </Grid>
          )}
          <Grid
            item
            lg={2.4}
            sm={6}
            xs={12}
          >
            <Typography
              variant="subtitle1"
              mb={3}
            >
              Наши магазины
            </Typography>
            <i
              className="ri-map-pin-2-fill primary"
              style={{ marginRight: 16 }}
            />
            <Typography
              variant="body2"
              component="span"
            >
              ул. Тоголок-Молдо 230
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              mt={2}
              mb={5}
            >
              <i
                className="ri-phone-fill primary"
                style={{ marginRight: 16 }}
              />
              <Typography
                variant="body2"
                component="span"
              >
                <a href="tel:+996 (500) 027 — 030">
                  +996 (500) 027 — 030
                </a>
                <br />{" "}
                <a href="tel:+996 (555) 027 — 030">
                  +996 (555) 027 — 030
                </a>{" "}
                <br />{" "}
                <a href="tel:+996 (775) 027 — 030">
                  +996 (775) 027 — 030
                </a>
              </Typography>
            </Box>
            <i
              className="ri-map-pin-2-fill primary"
              style={{ marginRight: 16 }}
            />
            <Typography
              variant="body2"
              component="span"
            >
              ул. Льва Толстого, р-н «Баткен»,
              кон. С-42
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              mt={2}
            >
              <i
                className="ri-phone-fill primary"
                style={{ marginRight: 16 }}
              />
              <Typography
                variant="body2"
                component="span"
              >
                <a href="tel:+996 (707) 201 — 927">
                  +996 (707) 201 — 927
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={2.4}
            xs={6}
          >
            <Typography
              variant="subtitle1"
              mb={3}
            >
              Наш сайт
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                rowGap: 2,
              }}
            >
              <Link to="/">Главная</Link>
              <Link to="/about">О нас</Link>
              <Link to="/services">Услуги</Link>
              <Link to="/catalog">Каталог</Link>
              <Link to="/portfolio">
                Портфолио
              </Link>
              <Link to="/contacts">Контакты</Link>
            </Box>
          </Grid>
          <Grid
            item
            lg={2.4}
            xs={6}
          >
            <Typography
              variant="subtitle1"
              mb={3}
            >
              Услуги
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                rowGap: { xs: 1, sm: 2 },
              }}
            >
              <Link to="/">Замер</Link>
              <Link to="/about">
                Дизайн проект
              </Link>
              <Link to="/services">
                Составление сметы
              </Link>
              <Link to="/catalog">
                Изготовление декора
              </Link>
              <Link to="/portfolio">
                Монтаж фасадного декора
              </Link>
              <Link to="/contacts">Доставка</Link>
            </Box>
          </Grid>
          <Grid
            item
            lg={2.4}
            component="a"
            href="https://www.instagram.com/ART_DECO_BISHKEK_/"
            target="_blank"
          >
            <Typography
              variant="subtitle1"
              mb={2.3}
            >
              Следите за нами <br />в Instagram
            </Typography>
            <img
              src={instagram}
              style={{
                objectFit: "cover",
                position: "relative",
                top: "6px",
              }}
              width={md ? "154px" : "170px"}
              height={md ? "224px" : "244px"}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
      <Box
        borderTop="1px solid #434343"
        p="20px 0 11px"
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              md: "space-between",
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
          }}
        >
          {" "}
          <Typography variant="body2">
            Все права защищены
          </Typography>
          <Typography variant="body2">
            Политика конфиденциальности
          </Typography>
          <Typography variant="body2">
            {" "}
            Разработано компанией{" "}
            <a
              href="https://odigital.app/"
              className="primary"
              style={{
                display: "block",
                textAlign: md
                  ? "center"
                  : "right",
              }}
            >
              Oracle Digital
            </a>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
