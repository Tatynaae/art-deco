import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { GetCategoryList } from "../reducers/main/main-api";

const Buttons = () => {
  const array = [
    {
      title: "Написать в WhatsApp",
      img: <i className="ri-whatsapp-line" />,
      href: "https://api.whatsapp.com/send/?phone=996500027030&text&app_absent=0",
      target: "_blank",
    },
    {
      title: "Перейти в Инстаграм",
      href: "https://www.instagram.com/ART_DECO_BISHKEK_/",
      img: <i className="ri-instagram-line" />,
    },
    {
      title: "Призыв к действию",
      href: `/catalog/Готовые%20комплекты%20Окна`,
      img: <i className="ri-calculator-line" />,
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(GetCategoryList(2));
    } catch (e) {}
  }, []);
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
    <Box
      display={{ xs: "none", lg: "flex" }}
      flexDirection="column"
      position="fixed"
      right="0"
      top="50%"
      sx={{
        transition: "all 0.4s linear",
        transform: scroll
          ? "translate(100%, -50%)!important"
          : "translate(0, -50%)!important",
      }}
      zIndex="3"
    >
      {array.map((item, idx) => (
        <Button
          key={item.title + idx}
          href={item.href}
          target={item.target}
          size=""
          variant="contained"
          sx={{
            backgroundColor: "#FDC841",
            borderRadius: "10px 0px 0px 10px",
            display: "flex",
            flexDirection: "column",
            width: 120,
            height: 120,
            mb: 3,
            textTransform: "unset",
            lineHeight: 1,
            fontWeight: 500,
            fontSize: 14,
            "& i": {
              mb: 2,
              fontSize: 24,
              color: "#000",
            },
          }}
        >
          {item.img}
          {item.title}
        </Button>
      ))}
    </Box>
  );
};

export default Buttons;
