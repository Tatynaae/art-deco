import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import reviewsBg from "../../assets/images/home/reviews-bg.webp";
import reviewsImg from "../../assets/images/review/IMAGE 2022-10-07 16_46_19.jpg";
import reviewsImg2 from "../../assets/images/review.webp";
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
import phone from "../../assets/images/home/img.png";
import arrow from "../../assets/images/arrowYellow.svg";
import avatar from "../../assets/images/avatar.svg";
import { Box } from "@mui/system";
import { textAnimation } from "../../shared/animation";
import {
  Mbox,
  MTypography,
} from "../../components/Motion";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { getReviews } from "../../reducers/main/main-api";
import ReactPlayer from "react-player/youtube";

// Lazy load the YouTube player
SwiperCore.use([
  Autoplay,
  Navigation,
  Pagination,
]);

const Reviews = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { reviews } = useSelector(
    (store) => store.main
  );
  const handAnimation = {
    // hidden: {
    //   x: 400,
    //   opacity: 0,
    // },
    // visible: {
    //   x: 0,
    //   opacity: 1,
    //   transition: { delay: 1 * 0.2 },
    // },
  };

  useEffect(() => {
    dispatch(getReviews());
  }, []);
  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <MTypography
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={textAnimation}
          variant="h1"
          mb={{ xs: 4, lg: 9 }}
          component="h2"
        >
          Посмотрите отзывы <br />
          наших клиентов
        </MTypography>

        <Grid
          container
          spacing={{ xs: 12, lg: 4 }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            xl={5}
            position="relative"
          >
            <Swiper
              slidesPerView={1}
              // navigation={true}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              className={classes.swiper}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
            >
              {reviews.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div
                      style={{
                        width: "100%",
                        maxHeight: 382,
                        position: "relative",
                        borderRadius: "10px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={
                          idx === 0
                            ? reviewsImg2
                            : reviewsImg
                        }
                        style={{
                          width:
                            idx === 0
                              ? "350px"
                              : "100%",
                          height:
                            idx === 0
                              ? "350px"
                              : "100%",
                          objectFit:
                            idx === 0
                              ? "contain"
                              : "cover",
                        }}
                        alt=""
                      />
                      {/*<ReactPlayer*/}
                      {/*    playing={false}*/}
                      {/*    loop={true}*/}
                      {/*    style={{*/}
                      {/*      width: "100%",*/}
                      {/*      maxHeight: "50%",*/}
                      {/*      objectFit: "cover",*/}
                      {/*      marginLeft : "-30%",*/}
                      {/*      paddingLeft : "25%"*/}
                      {/*    }}*/}
                      {/*    url={"https://www.youtube.com/watch?v=_3OcqvZR-sg"}*/}
                      {/*/>*/}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            xl={3.6}
            position="relative"
          >
            <Swiper
              slidesPerView={1}
              // navigation={true}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              className={classes.swiper}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
            >
              {reviews.map((item) => {
                return (
                  <SwiperSlide
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   justifyContent: "center",
                  //   height: '100%'
                  // }}
                  >
                    <Box display="flex">
                      <img
                        src={avatar}
                        alt=""
                      />
                      <Box ml={2}>
                        <Typography
                          variant="subtitle1"
                          mb={1.5}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          display="flex"
                          alignItems="center"
                        >
                          Оценка:{" "}
                          <span
                            className="bold"
                            style={{
                              margin: "0 8px",
                            }}
                          >
                            {item.middle_star} из
                            5
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="subtitle2"
                      mb={1}
                      mt={3.8}
                      lineHeight="24px"
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "-webkit-box",
                        "-webkit-line-clamp": "7",
                        "-webkit-box-orient":
                          "vertical",
                        wordWrap: "break-word",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
        <Mbox
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={handAnimation}
          component="img"
          sx={{
            position: "absolute",
            width: "475px",
            height: "643px",
            right: 0,
            bottom: 0,
            display: { xs: "none", xl: "block" },
          }}
          src={phone}
          alt=""
        />
      </Container>
    </section>
  );
};

export default Reviews;

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "47px 0 150px",
    position: "relative",
    background: `no-repeat url(${reviewsBg}) center/cover`,
    [theme.breakpoints.down(992)]: {
      paddingTop: 0,
    },
  },

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
        bottom: "-49px",
        zIndex: 10,
        cursor: "pointer",
        border:
          "1px solid rgba(255, 255, 255, 0.28)",
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
      right: "0%",
      zIndex: 100,
      transform: "rotate(180deg)",
    },

    "& .swiper-button-prev": {
      left: "0%",
      transform: "",
      zIndex: 100,
    },
  },
}));
