import {Container, useMediaQuery} from "@mui/material";
import React, {useEffect, useState} from "react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import arrow from "../../assets/images/arrowYellow.svg";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { MTypography } from "../../components/Motion";
import { textAnimation } from "../../shared/animation";
import {useDispatch, useSelector} from "react-redux";
import {Category, Filter} from "../../reducers/main/main-api";
import {theme} from "../../theme";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const {categorys , filter} = useSelector(store => store.main)
  const [type, setType] = useState("Арка");
  const lg = useMediaQuery(theme.breakpoints.down("992"));
  useEffect(()=>{
    dispatch(Category())
    if (filter.length===0){
      dispatch(Filter(type))
    }
  },[])
  const getFilter = async (item) => {
    await dispatch(Filter(item))
    setType(item)
  }
  return (
    <section>
      <Container maxWidth="xl">
        <MTypography
         initial="hidden"
         whileInView="visible"
         custom={1}
         variants={textAnimation}
          variant="h2"
          lineHeight="120%"
          maxWidth="767px"
          m="0 auto"
          textAlign="center"
        >
          Мы представляем Вашему вниманию современные – фасадные архитектурные
          элементы{" "}
        </MTypography>
      </Container>
    </section>
  );
};

export default Products;


const useStyles = makeStyles((theme) => ({
  swiper: {
    position: "static",
    "& .swiper-pagination-bullets": {
      bottom: "-42px",
      "& .swiper-pagination-bullet": {
        width: 16,
        height: 16,
        background: "transparent",
        border: "2px solid #F3CD82",
        opacity: 1,
        [theme.breakpoints.down("768")]: {
          width: 12,
          height: 12,
        },
      },

      "& .swiper-pagination-bullet-active": {
        position: "relative",
        "&:before": {
          content: `''!important`,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "8px",
          height: "8px",
          background: "linear-gradient(180deg, #FFD15B 0%, #FDC841 100%)",
          borderRadius: "100%",
        },
      },
    },

    "& .swiper-button-next, .swiper-button-prev": {
      width: 40,
      height: 40,
      position: "absolute",
      top: "50%",
      zIndex: 10,
      cursor: "pointer",
      border: "1px solid rgba(255, 255, 255, 0.28)",
      borderRadius: "100%",

      "&:before": {
        content: `''!important`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `no-repeat url('${arrow}') center/cover`,
      },
    },

    "& .swiper-button-next": {
      right: "-6%",
      transform: "translateY(-50%) rotate(180deg)",
      [theme.breakpoints.down(992)]: {
        right: "-3%",
      },
    },

    "& .swiper-button-prev": {
      left: "-6%",
      transform: "translateY(-50%)",
      [theme.breakpoints.down(992)]: {
        left: "-3%",
      },
    },
  },
}));
