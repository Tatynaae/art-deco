import React, { useEffect } from "react";
import {
  Container,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import arrow from "../../assets/images/arrowYellow.svg";
import { Box } from "@mui/system";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { Partner } from "../../reducers/main/main-api";

SwiperCore.use([
  Autoplay,
  Navigation,
  Pagination,
]);

const Partners = ({ page }) => {
  const classes = useStyles();
  const { partners } = useSelector(
    (store) => store.main
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Partner());
  }, []);
  return (
    <section
      className={classes.section}
      style={{
        backgroundColor: page ? "" : "#FFF",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          component="h2"
          color={!page ? "#1E1F25" : ""}
          textAlign="center"
          mb={5}
        >
          Наши партнеры
        </Typography>
        <Box position="relative">
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            className={classes.swiper}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 16,
              },

              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 12,
              },

              992: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 30,
              },

              1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 30,
              },
            }}
          >
            {partners.map((item, idx) => (
              <SwiperSlide
                key={item.link + idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  href={item.link}
                  className={classes.image}
                >
                  <img
                    src={item.poster}
                    height={"100%"}
                    style={{
                      objectFit: "contain",
                    }}
                    width={"100%"}
                    alt=""
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </section>
  );
};

export default Partners;

const useStyles = makeStyles((theme) => ({
  image: {
    position: "relative",
    width: "85%",
    height: "90px",
    overFlow: "hidden",
  },
  section: {
    padding: "60px 0 180px",

    [theme.breakpoints.down(992)]: {
      padding: "60px 0 60px",
    },

    [theme.breakpoints.down(768)]: {
      padding: "40px 0 40px",
    },
  },

  swiper: {
    width: "100%",
    position: "static",

    "& .swiper-pagination-bullets": {
      [theme.breakpoints.down(992)]: {
        display: "none",
      },
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
          background:
            "linear-gradient(180deg, #FFD15B 0%, #FDC841 100%)",
          borderRadius: "100%",
        },
      },
    },

    "& .swiper-button-next, .swiper-button-prev":
      {
        width: 40,
        height: 40,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        border: "1px solid rgba(0, 0, 0, 0.28);",
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
      right: "-4%",
      transform:
        "translateY(-50%) rotate(180deg)",
      [theme.breakpoints.down(992)]: {
        right: "-1%",
      },
    },

    "& .swiper-button-prev": {
      left: "-4%",
      transform: "translateY(-50%)",
      [theme.breakpoints.down(992)]: {
        left: "-1%",
      },
    },
  },
}));
