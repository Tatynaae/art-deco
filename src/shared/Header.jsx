import { useTheme } from "@emotion/react";
import {
  AppBar,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import logo from "../assets/images/logo.webp";
import {
  Instagram,
  Telegram,
  WhatsApp,
} from "./icons";

const Header = ({ open, setOpen }) => {
  const theme = useTheme();
  const location = useLocation();

  const [sticky, setSticky] = useState(false);

  const lg = useMediaQuery(
    theme.breakpoints.down("992")
  );
  const md = useMediaQuery(
    theme.breakpoints.down("768")
  );

  const makeSticky = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", makeSticky);

  const [prevScroll, setPrevScroll] = useState(0);
  const [scroll, setScroll] = useState(false);

  const scrollHandler = useCallback(
    (e) => {
      let current =
        e.target.documentElement.scrollTop;
      if (prevScroll < current) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      setPrevScroll(current);
    },
    [prevScroll]
  );

  useEffect(() => {
    document.addEventListener(
      "scroll",
      scrollHandler
    );
    return function () {
      document.removeEventListener(
        "scroll",
        scrollHandler
      );
    };
  }, [scrollHandler]);

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        transition: "all 0.3s linear",
        background:
          location.pathname === "/" && sticky
            ? "#1E1F25"
            : location.pathname === "/"
            ? "transparent"
            : "#1E1F25",
        p: sticky ? "15px 0" : "21px 0",
        borderBottom: {
          xs: "1px solid #434343",
          lg: "none",
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <Link to="/">
              <img
                src={logo}
                width="80px"
                height="52px"
                alt=""
              />
            </Link>
            {!lg && (
              <Typography
                fontSize="14px"
                ml={2}
                sx={{
                  display: "inline-block",
                  maxWidth: "100px",
                }}
              >
                Декоративное искусство
              </Typography>
            )}
          </div>
          {!lg && (
            <>
              <Box
                display="flex"
                alignItems="center"
              >
                <i
                  className="ri-map-pin-2-fill primary"
                  style={{
                    fontSize: 18,
                    marginRight: 10,
                  }}
                />
                <div>
                  <Typography
                    variant="body2"
                    sx={{
                      maxWidth: "171px",
                    }}
                  >
                    г. Бишкек ул. Тоголок Молдо
                    230
                  </Typography>
                  <Link
                    to="/contacts"
                    style={{ fontSize: 13 }}
                    className="link primary"
                  >
                    Посмотреть на карте
                  </Link>
                </div>
              </Box>
              <Box
                display="flex"
                component="a"
                alignItems="center"
                target="_blank"
              >
                <Typography
                  variant="body2"
                  ml={1.2}
                  sx={{
                    maxWidth: "150px",
                  }}
                >
                  Рабочий график: <br />с 09:00 -
                  18:00 Выходной: Пятница
                </Typography>
              </Box>
              <div>
                <Typography
                  variant="body2"
                  mb={0.5}
                >
                  Мы в соц.сетях
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
            </>
          )}

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a
              href="tel:+996 (500) 027 030"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className={
                  md
                    ? "ri-phone-fill "
                    : "ri-phone-fill primary"
                }
                style={{ fontSize: md ? 24 : 16 }}
              />

              <Typography
                component="span"
                ml={1.4}
                variant="h6"
              >
                +996 (500) 027 030
              </Typography>
            </a>
            <a
              href="tel:+996 (555) 027 030"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className={
                  md
                    ? "ri-phone-fill "
                    : "ri-phone-fill primary"
                }
                style={{ fontSize: md ? 24 : 16 }}
              />

              <Typography
                component="span"
                ml={1.4}
                variant="h6"
              >
                +996 (555) 027 030
              </Typography>
            </a>
            <span
              style={{
                fontSize: 14,
                textAlign: "center",
                display: "block",
              }}
              className="link gray"
            >
              Заказать звонок
            </span>
          </Box>
          {lg && (
            <div
              id="navMenu"
              className={open && "active"}
              onClick={() => setOpen(!open)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </Box>
        {!lg && (
          <Box
            component="nav"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={scroll ? "" : "19px"}
            sx={{
              transition: "all 0.3s linear",
              width: "100%",
              opacity: scroll ? 0 : 1,
              transform: scroll
                ? "translateY(-100%)"
                : "",
              "& a": {
                textTransform: "uppercase",
                fontWeight: 400,
              },
            }}
          >
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/catalog">
              Каталог
            </NavLink>
            <NavLink to="/portfolio">
              Портфолио
            </NavLink>
            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/services">
              Услуги
            </NavLink>
            <NavLink to="/contacts">
              Контакты
            </NavLink>
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
