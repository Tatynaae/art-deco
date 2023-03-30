import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, {
  useEffect,
  useState,
} from "react";
import {
  Mbox,
  MGrid,
  MTypography,
} from "../../components/Motion";
import {
  blocksAnimationTop,
  textAnimation,
} from "../../shared/animation";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import { makeStyles } from "@mui/styles";
import ReactPlayer from "react-player/youtube";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Video = () => {
  const classes = useStyles();
  const youtube = [
    {
      url: "https://www.youtube.com/watch?v=k1IMQ_CJdKo",
      code: "fdv#43((*",
    },
    {
      url: "https://youtu.be/vWruIkeG-0E",
      code: "fdv#adsv43((*",
    },
    {
      url: "https://youtu.be/m3xyLU9EqMI",
      code: "@#34fdv#43((*",
    },
  ];
  const [VideoSwipe, setVideoSwipe] = useState({
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  });

  return (
    <Mbox
      initial="hidden"
      whileInView="visible"
      component="section"
      pt="150px"
      pb={{ xs: "70px", lg: 0 }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 0, lg: 15 }}
        >
          <Grid
            item
            xs={12}
            lg={8}
            mb={{ xs: 4, lg: 0 }}
          >
            <MTypography
              variants={textAnimation}
              custom={3}
              variant="h2"
              mb={{ xs: 2.5, lg: 4 }}
            >
              Наши работы
            </MTypography>
            <Swiper
              slidesPerView={1}
              className={classes.swiper}
              autoplay={VideoSwipe}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {youtube.map((item, idx) => {
                return (
                  <SwiperSlide
                    height={{
                      xs: 180,
                      md: 390,
                      lg: 450,
                    }}
                    key={item.url + idx}
                  >
                    <ReactPlayer
                      volume={1}
                      loop={true}
                      width="100%"
                      border="none"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{
                        height: "100%",
                        objectFit: "cover",
                      }}
                      url={item.url}
                      onPlay={() =>
                        setVideoSwipe(null)
                      }
                      onPause={() =>
                        setVideoSwipe({
                          delay: 3000,
                          pauseOnMouseEnter: true,
                          disableOnInteraction: false,
                        })
                      }
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
          >
            {/*<MTypography*/}
            {/*  variants={textAnimation}*/}
            {/*  custom={5}*/}
            {/*  variant="subtitle2"*/}
            {/*  pl={{ xs: "100px", lg: 0 }}*/}
            {/*  className="heading"*/}
            {/*>*/}
            {/*  Ut enim ad minima v quia non numquam eius modi tempora e et*/}
            {/*</MTypography>*/}
            <Grid
              container
              spacing={{ xs: 5, lg: 2 }}
              mt={{ xs: 2.5, lg: 3 }}
              pl="44px"
              display="flex"
              justifyContent="center"
              alignItems="stretch"
            >
              <MGrid
                variants={blocksAnimationTop}
                custom={1}
                initial="hidden"
                whileInView="visible"
                item
                xs={6}
                lg={12}
              >
                <Typography
                  fontSize={{ xs: 28, md: 36 }}
                  className="list-item"
                >
                  10 000
                </Typography>
                <Typography variant="subtitle2">
                  Больше 10К довольных клиентов
                </Typography>
              </MGrid>
              <MGrid
                variants={blocksAnimationTop}
                custom={2}
                item
                initial="hidden"
                whileInView="visible"
                xs={6}
                lg={12}
              >
                <Typography
                  fontSize={{ xs: 28, md: 36 }}
                  className="list-item"
                >
                  10 000
                </Typography>
                <Typography variant="subtitle2">
                  Столько же красивых объектов по
                  всему Кыргызстану
                </Typography>
              </MGrid>
            </Grid>
            <Grid
              container
              spacing={{ xs: 5, lg: 2 }}
              mt={{ xs: 0, lg: 1 }}
              pl="44px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <MGrid
                variants={blocksAnimationTop}
                custom={3}
                initial="hidden"
                whileInView="visible"
                item
                xs={6}
                lg={12}
              >
                <Typography className="list-item">
                  <Typography variant="subtitle2">
                    Производим С 2015-года один из
                    лидеров в этой сфере
                  </Typography>
                </Typography>
              </MGrid>
              <MGrid
                variants={blocksAnimationTop}
                custom={4}
                item
                xs={6}
                lg={12}
                initial="hidden"
                whileInView="visible"
              >
                <Typography
                  fontSize={{ xs: 28, md: 36 }}
                  className="list-item"
                >
                  <Typography variant="subtitle2">
                    Сертификат соответствия
                  </Typography>
                </Typography>
              </MGrid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Mbox>
  );
};

export default Video;

const useStyles = makeStyles((theme) => ({
  swiper: {
    "& .swiper-pagination-bullets": {
      "& .swiper-pagination-bullet": {
        width: 16,
        height: 16,
        background: "transparent",
        border: "2px solid #F3CD82",
        opacity: "0.6",
        [theme.breakpoints.down("768")]: {
          width: 12,
          height: 12,
        },
      },
      "& .swiper-pagination": {
        position: "absolute",
        opacity: "0.6",
        zIndex: "1000",
      },
      "& .swiper-pagination-bullet-active": {
        position: "relative",
        "&:before": {
          opacity: "0.1",
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
    // "& .swiper-button-next, .swiper-button-prev": {
    //   width: 40,
    //   height: 40,
    //   position: "absolute",
    //   bottom: "-49px",
    //   zIndex: 10,
    //   cursor: "pointer",
    //   border: "1px solid rgba(255, 255, 255, 0.28)",
    //   borderRadius: "100%",
    //   "&:before": {
    //     content: `''!important`,
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     height: "100%",
    //     background: `no-repeat url('${arrow}') center/cover`,
    //   },
    // },

    // "& /
  },
}));
