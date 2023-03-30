import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import cooperationBg from "../../assets/images/home/cooperation-bg.webp";
import {
  Instagram,
  Telegram,
  WhatsApp,
} from "../../shared/icons";
import {
  MGrid,
  MTypography,
} from "../../components/Motion";
import {
  blocksAnimationTop,
  textAnimation,
} from "../../shared/animation";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ContactPost } from "../../reducers/post/post-api";

const Cooperation = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(ContactPost(data));
  };
  // {...register("phone", { required: true })}

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity={"success"}
          variant="filled"
        >
          Успешно отправлено
        </Alert>
      </Snackbar>
      <Box
        component="section"
        sx={{
          mt: { xs: 2 },
          pt: { xs: "270px", lg: "418px" },
          background: {
            xs: `no-repeat url(${cooperationBg}) center top/contain`,
            lg: `no-repeat url(${cooperationBg}) left/contain`,
          },
          backgroundSize: {
            xs: "calc(100% - 32px) 300px",
            md: "100% 528px",
            lg: "1345px 842px",
          },
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              xs={12}
              lg={8}
            >
              <MTypography
                initial="hidden"
                whileInView="visible"
                custom={1}
                variants={textAnimation}
                fontSize={{ xs: 26, md: 40 }}
                textAlign={{
                  xs: "center",
                  lg: "left",
                }}
              >
                Этапы сотрудничества
              </MTypography>
              <Grid
                container
                spacing={4}
                mt={{ xs: 1, lg: 6 }}
              >
                {array.map((item, idx) => (
                  <MGrid
                    key={item.title + idx}
                    initial="hidden"
                    whileInView="visible"
                    custom={idx}
                    variants={textAnimation}
                    item
                    lg={6}
                    sx={{ pl: "100px!important" }}
                  >
                    <Typography
                      className="circle"
                      id={item.step}
                      variant="subtitle2"
                    >
                      {item.title}
                    </Typography>
                  </MGrid>
                ))}
              </Grid>
            </Grid>
            <MGrid
              custom={1}
              variants={blocksAnimationTop}
              initial="hidden"
              whileInView="visible"
              item
              xs={12}
              md={8}
              lg={4}
              m={{ xs: "0 auto", lg: "" }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  p: { xs: 0, sm: 4 },
                  background: {
                    xs: "transparent",
                    sm: "#191A1F",
                  },
                  borderRadius: "20px",
                  boxShadow: {
                    xs: "none",
                    sm: "0px 0px 17px rgba(17, 18, 21, 0.66)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  className="primary"
                >
                  Готовы к сотрудничеству?
                </Typography>
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  mt={2}
                  mb={2.5}
                >
                  Оставьте свои контакты, свяжемся
                  в течении дня
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  sx={{ m: "10px 0" }}
                  placeholder="Телефон"
                  type={"number"}
                  {...register("phone", {
                    required: true,
                  })}
                  fullWidth
                />
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  placeholder="Сообщение"
                  multiline
                  {...register("name", {
                    required: true,
                  })}
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius:
                        "30px!important",
                    },
                  }}
                />
                <Button
                  fullWidth
                  type="submit"
                  size="medium"
                  variant="contained"
                  sx={{ m: "10px 0 0" }}
                  color="primary"
                >
                  Отправить
                </Button>
                <Typography
                  variant="subtitle2"
                  mt={5}
                  textAlign="center"
                  mb={2}
                >
                  Или позвоните нам сами
                </Typography>
                <Typography
                  variant="h3"
                  textAlign="center"
                  fontWeight="600"
                  mb={2}
                >
                  <a href="tel: +996 (500) 027 030">
                    +996 (500) 027 030
                  </a>
                  <br />{" "}
                  <a href="tel:+996 (555) 027 030">
                    +996 (555) 027 030
                  </a>
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  columnGap="20px"
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
                    href="https://api.whatsapp.com/send/?phone=996500027030&text&app_absent=0"
                  >
                    <WhatsApp />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/+996500027030"
                  >
                    <Telegram />
                  </a>
                </Box>
              </Box>
            </MGrid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Cooperation;

const array = [
  {
    step: 1,
    title:
      "Вы звоните нам или оставляете заявку на нашем сайте",
  },
  {
    step: 2,
    title:
      "Полная консультация подбор и расчет сметы",
  },
  {
    step: 3,
    title:
      "Делаем расчет, при необходимости выезжаем на замер, делаем дизайн проект дома",
  },
  {
    step: 4,
    title:
      "Заключаем договор, после внесения предоплаты (40%) приступаем к производству декора",
  },
  {
    step: 5,
    title:
      "С момента заказ осуществляем доставку на объект или отгрузку со склада",
  },
  {
    step: 6,
    title:
      "Монтируем декор, осуществляем шеф монтаж, либо консультируем по технологии монтажа",
  },
];
