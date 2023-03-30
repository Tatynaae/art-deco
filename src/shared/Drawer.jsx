import {
  Box,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Telegram,
  WhatsApp,
} from "./icons";

const SideBar = ({ open, setOpen }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      sx={{
        "& .MuiPaper-root": {
          background: "#191A1F",
          boxShadow: "0px 0px 26px #111215",
          width: { xs: "90%", md: "50%" },
          p: "70px 20px 20px 20px",
          borderRadius: "0px 20px 20px 0px",
          transitionDelay: "0.8s",
        },
      }}
    >
      <Box
        display="flex"
        mb={6}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=996500027030&text&app_absent=0"
            target="_blank"
            rel="noreferrer noopener"
          >
            <WhatsApp />
          </a>
          <Typography
            ml={1}
            variant="body2"
          >
            Пишите,
            <br /> мы Online
          </Typography>
        </Box>
        <div
          id="navMenu"
          className={open && "active"}
          onClick={() => setOpen(!open)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          rowGap: 4,
          "& a": {
            textTransform: "uppercase",
          },
        }}
      >
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/portfolio">Портфолио</Link>
        <Link to="/contacts">Контакты</Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        mt={5}
      >
        <i
          className="ri-phone-fill primary"
          style={{
            marginRight: 16,
            fontSize: 20,
          }}
        />
        <Typography
          variant="h6"
          component="span"
          fontWeight="600"
        >
          <a href="tel:+996 (500) 027 — 030">
            +996 (500) 027 — 030
          </a>
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        mt={4}
        mb={4}
      >
        <i
          className="ri-map-pin-2-fill primary"
          style={{
            marginRight: 16,
            fontSize: 20,
          }}
        />
        <Typography
          variant="subtitle1"
          component="span"
        >
          ул. Тоголок-Молдо 230
        </Typography>
      </Box>
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
            target="_blank"
            rel="noreferrer"
            href="https://t.me/+996500027030"
          >
            <Telegram />
          </a>
        </Box>
      </div>
    </SwipeableDrawer>
  );
};

export default SideBar;
