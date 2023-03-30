import {Container, useMediaQuery} from "@mui/material";
// import { Box } from "@mui/system";
import React, {useEffect, useState} from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
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
        {/*<Box*/}
        {/*  display="flex"*/}
        {/*  columnGap={{ xs: "10px", lg: "30px" }}*/}
        {/*  rowGap={{ xs: "10px", lg: "20px" }}*/}
        {/*  mt={{ xs: 3, lg: 6 }}*/}
        {/*  flexWrap="wrap"*/}
        {/*  justifyContent="center"*/}
        {/*>*/}
        {/*  {categorys.map((item) => (*/}
        {/*    <Chip*/}
        {/*      size="large"*/}
        {/*      label={item.title}*/}
        {/*      onClick={() => getFilter(item.title)}*/}
        {/*      sx={{*/}
        {/*        p: { md: "15px", lg: "24px" },*/}
        {/*        borderRadius: "76px",*/}
        {/*        "& span": { color: item.title=== type ? "#000!important" : "#fff" },*/}
        {/*        backgroundColor: item.title === type ? "#FFD15B" : "#383A44",*/}
        {/*        "&:hover": {*/}
        {/*          background: "#535564",*/}
        {/*        },*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</Box>*/}
        {/*<Box display="flex" mt={5} mb={4} justifyContent="space-between">*/}
        {/*  <Typography variant="subtitle2">*/}
        {/*    <span className="primary">{type}</span> : {filter.length} вида продукции*/}
        {/*  </Typography>*/}
        {/*  <Link to="/catalog" className="link primary">*/}
        {/*    Перейти к продукции*/}
        {/*  </Link>*/}
        {/*</Box>*/}
        {/*<Box position="relative">*/}
        {/*  <Swiper*/}
        {/*    navigation={true}*/}
        {/*    pagination={{*/}
        {/*      clickable: true,*/}
        {/*    }}*/}
        {/*    className={classes.swiper}*/}
        {/*    autoplay={{*/}
        {/*      delay: 3000,*/}
        {/*      pauseOnMouseEnter: true,*/}
        {/*      disableOnInteraction: false,*/}
        {/*    }}*/}
        {/*    breakpoints={{*/}
        {/*      0: {*/}
        {/*        slidesPerView: 1,*/}
        {/*        slidesPerGroup: 1,*/}
        {/*        spaceBetween: 16,*/}
        {/*      },*/}

        {/*      768: {*/}
        {/*        slidesPerView: 3,*/}
        {/*        slidesPerGroup: 3,*/}
        {/*        spaceBetween: 12,*/}
        {/*      },*/}

        {/*      992: {*/}
        {/*        slidesPerView: 4,*/}
        {/*        slidesPerGroup: 4,*/}
        {/*        spaceBetween: 30,*/}
        {/*      },*/}

        {/*      1200: {*/}
        {/*        slidesPerView: 4,*/}
        {/*        slidesPerGroup: 4,*/}
        {/*        spaceBetween: 30,*/}
        {/*      },*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {filter.map((item,index)=>(*/}
        {/*        <SwiperSlide>*/}
        {/*          <Link key={index} to={`/catalog/details/${item.title}`} style={{ display: "block" }}>*/}
        {/*            <img*/}
        {/*                src={item.image}*/}
        {/*                style={{*/}
        {/*                  width: "100%",*/}
        {/*                  maxWidth: "270px",*/}
        {/*                  display: "table",*/}
        {/*                  margin: "0 auto",*/}
        {/*                  height: lg ? 135 : "270px",*/}
        {/*                  objectFit : "cover"*/}
        {/*                }}*/}
        {/*                alt=""*/}
        {/*            />*/}
        {/*            <Typography variant="subtitle2" mt={1} textAlign="center">*/}
        {/*              {item.title}*/}
        {/*            </Typography>*/}
        {/*          </Link>*/}
        {/*        </SwiperSlide>*/}
        {/*    ))}*/}
        {/*  </Swiper>*/}
        {/*</Box>*/}
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
