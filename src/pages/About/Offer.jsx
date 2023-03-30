import React, {useEffect, useState} from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import offerBg from "../../assets/images/about/offer-bg.webp";
import { Container } from "@mui/system";
import Checkmark from "../../assets/images/checkmark";
import { Mbox, MTypography } from "../../components/Motion";
import { useFormik } from "formik";
import { blocksAnimation, textAnimation } from "../../shared/animation";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {ContactPost} from "../../reducers/post/post-api";

const Offer = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {contact} = useSelector(store=>store.post)
  useEffect(()=>{
    if (contact === "ok") {
      setOpen(true);
      setTimeout(()=>{
        document.location.reload()
      },600)
    }
  })
  const onSubmit = data => {
    dispatch(ContactPost(data))
  };
  // {...register("phone", { required: true })}
  return (
      <>
        <Snackbar
            open={open}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={() => setOpen(false)}
        >
          <Alert severity={"success"} variant="filled">
            Успешно отправлено
          </Alert>
        </Snackbar>
        <Box
            component="section"
            pt={{ md: "60px", lg: "225px" }}
            sx={{
              background: `no-repeat url(${offerBg}) center/cover`,
            }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={8}>
              <Grid item xs={12} lg={7}>
                <MTypography
                    initial="hidden"
                    whileInView="visible"
                    custom={2}
                    variants={textAnimation}
                    variant="h1"
                    mb={5}
                    component="h2"
                >
                  Компания «Арт Деко»,
                  <br /> предлагает
                </MTypography>
                <div>
                  <Mbox
                      initial="hidden"
                      whileInView="visible"
                      custom={1}
                      variants={blocksAnimation}
                      display="flex"
                      alignItems="center"
                  >
                    <Checkmark />
                    <Typography
                        variant="subtitle2"
                        ml={2}
                        maxWidth={{ xs: 290, md: "570px" }}
                    >
                    <span className="bold">
                      изготовление архитектурных фасадных элементов
                    </span>
                      , на собственно роизводственной базе по каталогу компании
                      или по эскизам заказчик
                    </Typography>
                  </Mbox>
                  <Mbox
                      initial="hidden"
                      whileInView="visible"
                      custom={2}
                      variants={blocksAnimation}
                      display="flex"
                      alignItems="center"
                      mb={4}
                      mt={4}
                  >
                    <Checkmark />
                    <Typography
                        variant="subtitle2"
                        ml={2}
                        maxWidth={{ xs: 290, md: "570px" }}
                    >
                    <span className="bold">
                      проект разработка дизайн-проекта
                    </span>
                      фасадов зданий
                    </Typography>
                  </Mbox>
                  <Mbox
                      initial="hidden"
                      whileInView="visible"
                      custom={3}
                      variants={blocksAnimation}
                      display="flex"
                      alignItems="center"
                  >
                    <Checkmark />
                    <Typography
                        variant="subtitle2"
                        ml={2}
                        maxWidth={{ xs: 290, md: "570px" }}
                    >
                      <span className="bold">монтаж</span>
                      архитектурных декоративных элементов на фасаде
                    </Typography>
                  </Mbox>
                </div>
              </Grid>
              <Grid item xs={12} lg={5}>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                      background: "#191A1F",
                      p: { xs: "30px 20px", lg: "30px 83px 56px" },
                      borderRadius: "20px",
                    }}
                >
                  <Typography variant="h5" textAlign="center" className="primary">
                    Готовы к сотрудничеству?
                  </Typography>
                  <Typography
                      variant="subtitle2"
                      mt={2}
                      mb={2.5}
                      textAlign="center"
                  >
                    Оставьте свои контакты, свяжемся в течении дня
                  </Typography>
                  <TextField
                      {...register("name", { required: true })}
                      variant="outlined"
                      required
                      placeholder="Имя"
                      fullWidth
                  />
                  <TextField
                      {...register("phone", { required: true })}
                      variant="outlined"
                      required
                      placeholder="Телефон (+996...)"
                      sx={{ m: "10px 0" }}
                      fullWidth
                  />

                  <Button
                      type="submit"
                      fullWidth
                      size="medium"
                      variant="contained"
                      sx={{ m: "10px 0 0" }}
                      color="primary"
                  >
                    Отправить
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <MTypography
                initial="hidden"
                whileInView="visible"
                custom={2}
                variants={textAnimation}
                variant="h1"
                textAlign="center"
                mt={10}
                component="h2"
            >
              Мы предлагаем <br /> оптимальное сочетание:
              <p className="primary bold">«цена – качество – долговечность»</p>
            </MTypography>
          </Container>
        </Box>
      </>
  );
};

export default Offer;
