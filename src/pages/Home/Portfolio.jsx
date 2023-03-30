import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import "swiper/css";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
import { useNavigate } from "react-router-dom";
import { textAnimation } from "../../shared/animation";
import { MTypography } from "../../components/Motion";
import Card from "../Portfolio/Card";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { PortfolioGET } from "../../reducers/main/main-api";
import "swiper/css";

SwiperCore.use([Autoplay, Navigation]);

const Portfolio = () => {
  const dispatch = useDispatch();
  const { portfolio } = useSelector(
    (store) => store.main
  );
  useEffect(() => {
    if (portfolio.length === 0) {
      dispatch(PortfolioGET());
    }
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      pt={{ xs: "80px", lg: "120px" }}
      pb={{ xs: "70px", lg: "120px" }}
    >
      <Container maxWidth="xl">
        <MTypography
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={textAnimation}
          variant="h1"
          component="h2"
          mb={{ xs: 4, md: 5 }}
          fontWeight="600"
        >
          Сделали +2000 проектов, <br /> и ни один
          не повторяется
        </MTypography>
        {portfolio
          .slice(0, 2)
          .map((item, idx) => (
            <Card
              idx={idx}
              item={item}
              id={item.id}
            />
          ))}{" "}
        <Button
          color="primary"
          size="medium"
          onClick={() => navigate("/portfolio")}
          sx={{
            display: "table",
            m: {
              xs: "0 auto 0",
              sm: "63px auto 0",
            },
            boxShadow:
              "0px 1px 25px 5px rgba(255, 243, 220, 0.24)",
          }}
          variant="contained"
        >
          смотреть ещё +150 реализованных проектов
        </Button>
      </Container>
    </Box>
  );
};

export default Portfolio;
