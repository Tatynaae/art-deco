import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./catalog-item.css";

import { Fancybox } from "@fancyapps/ui";

import "swiper/css";

import arrow from "../../../assets/images/arrow.svg";
import { Container, useTheme } from "@mui/system";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { getCategoryPageItem } from "../../../reducers/main/main-api";
import ModalBtn from "./modal-btn";

const ProductDetails = () => {
  const theme = useTheme();
  const lg = useMediaQuery(
    theme.breakpoints.down("992")
  );
  const md = useMediaQuery(
    theme.breakpoints.down("768")
  );

  const params = useParams();
  const dispatch = useDispatch();
  const {
    categoryItem,
    similar,
    categoryItemWindow,
    categoryItemTitles,
    categoryItemImage,
  } = useSelector((store) => store.main);
  useEffect(() => {
    dispatch(getCategoryPageItem(params.id));
  }, [dispatch]);
  const idx = 1;
  const classes = useStyles();

  const btnSimilar = (title) => {
    document.location.replace(
      `/catalog/details/${title}`
    );
  };

  return (
    <section>
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexDirection={{
            xs: "column",
            lg: "row",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            width={{ xs: "100%", lg: "370px" }}
          >
            {md ? (
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                className={classes.swiper}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <div
                    data-fancybox={idx}
                    data-src={categoryItem.image}
                  >
                    <img
                      src={categoryItem.image}
                      height={
                        !lg ? "380px" : "296px"
                      }
                      width={
                        !lg ? "570px" : "100%"
                      }
                      style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                {categoryItem?.image_product?.map(
                  (item) => (
                    <SwiperSlide>
                      <div
                        data-fancybox={idx}
                        data-src={
                          item.product_image
                        }
                      >
                        <img
                          src={item.product_image}
                          height={
                            !lg
                              ? "380px"
                              : "296px"
                          }
                          width={
                            !lg ? "570px" : "100%"
                          }
                          style={{
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            ) : (
              <Box
                data-fancybox={idx}
                data-src={categoryItem.image}
                width="100%"
                height={!lg ? "370px" : "400px"}
              >
                <img
                  src={categoryItem.image}
                  height="100%"
                  width="100%"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
              </Box>
            )}
            {!md && (
              <Box
                display="flex"
                mt={2}
                width="100%"
                position={"relative"}
                flexWrap={"wrap"}
                sx={{
                  columnGap: { xs: 3, lg: 2 },
                }}
              >
                {categoryItemImage.map(
                  (item, index) => {
                    return (
                      <Box
                        key={index}
                        data-fancybox={idx}
                        height={
                          !lg ? "80px" : "120px"
                        }
                        data-src={
                          item.product_image
                        }
                        width="30%"
                        mb={"4%"}
                      >
                        <img
                          src={item.product_image}
                          style={{
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          width="100%"
                          height="100%"
                          alt=""
                        />
                      </Box>
                    );
                  }
                )}
              </Box>
            )}
          </Box>
          <Box
            width={{ lg: "50%" }}
            ml={{ xs: 0, lg: 3 }}
            mt={{ xs: 2, lg: 0 }}
          >
            <Typography
              variant="h4"
              textTransform="uppercase"
              mb={2}
            >
              {categoryItem.title}
            </Typography>
            {categoryItemWindow.length === 0 ? (
              <div className={"poster_of_size"}>
                {categoryItemTitles.map(
                  (item) => {
                    return (
                      <h3
                        className={
                          "poster_of_title"
                        }
                      >
                        {item.title}
                      </h3>
                    );
                  }
                )}
              </div>
            ) : (
              <div>
                <ul className="window_module">
                  {categoryItemWindow.map(
                    (item) => {
                      return (
                        <li
                          className={
                            "window_module_list"
                          }
                        >
                          <span
                            className={
                              "window_module_list_block1"
                            }
                          >
                            {item.product_name}
                          </span>
                          <span
                            className={
                              "window_module_list_block3"
                            }
                          >
                            {item.product_price}
                          </span>
                          <div
                            className={
                              "window_module_list_block2"
                            }
                          >
                            <span>
                              {item.measure}
                            </span>
                            {item.measure ===
                            "П.М" ? (
                              <></>
                            ) : (
                              <span>
                                : {item.quantity}
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
                <ModalBtn id={categoryItem.id} />
              </div>
            )}
          </Box>
        </Box>
        <Typography
          variant="subtitle1"
          mt={{ xs: 2, sm: 6 }}
          mb={1}
        >
          Описание
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
        >
          {categoryItem.description}
        </Typography>
        <Typography
          fontSize="24px"
          mt={{ xs: 8, lg: 10 }}
          mb={{ xs: 2, lg: 4 }}
        >
          Похожие товары
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, lg: 4 }}
        >
          {similar.map((item) => {
            return (
              <Grid
                item
                xs={6}
                md={4}
                lg={3}
              >
                <button
                  onClick={() =>
                    btnSimilar(item.title)
                  }
                  style={{
                    display: "block",
                    border: "none",
                    width: "100%",
                    background: "transparent",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "100%",
                      maxWidth: "270px",
                      margin: "0 auto",
                      height: lg ? 135 : "270px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <Typography
                    variant="subtitle2"
                    mt={1}
                    textAlign="center"
                  >
                    {item.title}
                  </Typography>
                </button>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default ProductDetails;

const useStyles = makeStyles((theme) => ({
  swiper: {
    width: "100%",

    "& .swiper-button-next, .swiper-button-prev":
      {
        width: 40,
        height: 40,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",

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
      right: 0,
      transform: "translateY(-50%) ",
    },

    "& .swiper-button-prev": {
      left: 0,
      transform:
        "translateY(-50%) rotate(180deg)",
    },
  },
}));
