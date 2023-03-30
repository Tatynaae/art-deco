import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import zamer from "../../assets/images/home/Rectangle-3057.webp";
import design from "../../assets/images/home/Rectangle-3072.webp";
import installing from "../../assets/images/home/Rectangle-3069.webp";
import decor from "../../assets/images/home/Rectangle-3067.webp";
import plan from "../../assets/images/home/Rectangle-3068.webp";
import shipping from "../../assets/images/home/Rectangle-3066.webp";
import {
  makeStyles,
  useTheme,
} from "@mui/styles";
import {
  Mbox,
  MGrid,
  MTypography,
} from "../../components/Motion";
import {
  blocksAnimation,
  textAnimation,
} from "../../shared/animation";

const Services = ({ page }) => {
  const classes = useStyles();
  const theme = useTheme();
  const lg = useMediaQuery(
    theme.breakpoints.down("992")
  );

  return (
    <Mbox
      component="section"
      pt={{ xs: 0, sm: 10 }}
      maxWidth="1920px"
      margin="0 auto"
    >
      <Container maxWidth="xl">
        <MTypography
          variant="h1"
          custom={0.5}
          variants={textAnimation}
          fontWeight="600"
          component="h2"
        >
          {!page
            ? "Чем мы занимаемся?"
            : "Услуги"}
        </MTypography>
        {page && (
          <Typography
            variant="h3"
            mt={2}
          >
            Производим работы под ключ:
          </Typography>
        )}
      </Container>
      <Grid
        container
        mt={5}
      >
        {services.map((item, idx) => (
          <MGrid
            key={item.title + idx}
            item
            custom={idx}
            variants={blocksAnimation}
            xs={12}
            sm={6}
            md={4}
            xl={2}
            className={classes.gridItem}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src={item.img}
              style={{ width: "100%" }}
              alt=""
            />
            <Typography
              fontSize={{
                xs: 26,
                lg: 20,
                xl: 26,
              }}
              textTransform="uppercase"
              component="h4"
              maxWidth="227px"
              fontWeight="600"
              lineHeight="112.69%!important"
            >
              {item.title}
            </Typography>
            <div className="content">
              <table>
                <tr>
                  <td>{item.desc}</td>
                </tr>
              </table>
            </div>
          </MGrid>
        ))}
      </Grid>
    </Mbox>
  );
};

export default Services;

const services = [
  {
    img: zamer,
    title: "Замер",
    desc: "Наши специалисты готовы приехать на ваш объект и замерить учтив все нюансы",
  },
  {
    img: design,
    title: "Визуализация",
    desc: "Специалисты Art Deco помогут вам с визуализацией с помощью нашего каталога и готовых изделий. Если у вас есть готовый проект дизайна, максимально подберут материал учитывая ваши требования и желания. В результате вы получите выразительный и индивидуальный облик вашего дома",
  },
  {
    img: shipping,
    title: "Изготовление декора",
    desc:
      "90% наших изделий всегда в наличии и кроме этого наша компания всегда готова производить по вашем экскизам c высокой точностью .\n" +
      "Наличие на складе, оптимальные сроки поставки и производства любого объема продукции",
  },
  {
    img: decor,
    title: "Составление сметы",
    desc: "Сотрудники нашей компании и онлайн и оффлайн готовы составить смету по вашим заказам",
  },
  {
    img: plan,
    title: "Доставка",
    desc: "Доставка осуществляется индивидуально",
  },
  {
    img: installing,
    title: "Монтаж фасадного декора",
    desc: "Сэкономленные время, легкостью конструкции и монтажа",
  },
];

const useStyles = makeStyles((theme) => ({
  gridItem: {
    position: "relative",
    overflow: "hidden",
    height: "fit-content",
    cursor: "pointer",
    maxHeight: "500px",

    "& img": {
      height: "100%",
      overflow: "hidden",
      transition: "all .3s ease-in-out!important",
    },

    "& h4": {
      position: "absolute",
      left: "0",
      top: "60%",
      padding: "8px",
      transition: "all 0.3s linear",

      [theme.breakpoints.down(768)]: {
        top: "70px",
      },
    },
    "& .content": {
      position: "absolute",
      padding: "8px",
      width: "100%",
      fontSize: "14px",
      height: "100%",
      display: "block",
      left: "0",
      top: "100%",
      transition: "all 0.4s linear",
      opacity: "0",

      [theme.breakpoints.down(768)]: {
        opacity: 1,
        top: "139px",
        fontSize: "16px",
      },
    },

    "&:nth-child(6)": {
      "& .content": {
        top: "168px",
      },
    },

    "&:hover": {
      "& img": {
        transform: "scale(1.1)",
      },
      "& .content": {
        top: "30%",
        opacity: "1",

        [theme.breakpoints.down(768)]: {
          top: "139px",
        },
      },
      "& h4": {
        top: "10%",
        [theme.breakpoints.down(768)]: {
          top: "70px",
        },
      },
    },
  },
}));
