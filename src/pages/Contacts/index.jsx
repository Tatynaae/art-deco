/* eslint-disable jsx-a11y/iframe-has-title */
import React, {
  useEffect,
  useState,
} from "react";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Box,
  Container,
  useTheme,
} from "@mui/system";
import shop from "../../assets/images/contacts/shop.webp";
import { useFormik } from "formik";
import office from "../../assets/images/contacts/office.webp";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useForm } from "react-hook-form";
import {
  ContactPost,
  MessagePost,
} from "../../reducers/post/post-api";

const Contacts = () => {
  const theme = useTheme();
  const lg = useMediaQuery(
    theme.breakpoints.down("992")
  );
  const md = useMediaQuery(
    theme.breakpoints.down("768")
  );

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { message } = useSelector(
    (store) => store.post
  );
  useEffect(() => {
    if (message === "Ok") {
      setOpen(true);
      setTimeout(() => {
        document.location.reload();
      }, 600);
    }
  });
  const onSubmit = (data) => {
    dispatch(MessagePost(data));
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
      <Box p={{ xs: "0 0 0", md: "0 0 100px" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h1"
            mb={{ xs: 3, lg: 5 }}
          >
            Свяжитесь с нами
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, lg: 3 }}
          >
            <Grid
              item
              xs={6}
              lg={4}
            >
              <img
                src={office}
                width="100%"
                style={{ objectFit: "cover" }}
                height={
                  md
                    ? "92px"
                    : lg
                    ? "168px"
                    : "214px"
                }
                alt=""
              />
              <Typography
                variant="h3"
                mt={{ xs: 2, lg: 5 }}
                mb={{ xs: 2, lg: 4 }}
                fontWeight="400"
              >
                Офис - Магазин
              </Typography>
              <Typography
                variant="h6"
                fontWeight="500"
              >
                Телефон
              </Typography>
              <Typography
                variant="h3"
                fontWeight="600"
                mb={5}
              >
                <a href="tel:+996 (500) 027 030">
                  +996 (500) 027 030
                </a>{" "}
                <br />
                <a href="tel:+996 (555) 027 030">
                  +996 (555) 027 030
                </a>{" "}
                <br />
              </Typography>
              <Typography
                variant="h6"
                fontWeight="500"
              >
                Адрес
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                mb={5}
              >
                ул. Тоголок-Молдо 230
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.804980680468!2d74.59600910228792!3d42.901668282975635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb8016aa936af%3A0x69f1f6dbcc3fffe0!2zMjMwINGD0LsuINCi0L7Qs9C-0LvQvtC6INCc0L7Qu9C00L4sINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1652797510673!5m2!1sru!2skg"
                width="100%"
                height={
                  md
                    ? "92px"
                    : lg
                    ? "168px"
                    : "214px"
                }
                style={{
                  borderRadius: "7px",
                  border: "none",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
            <Grid
              item
              xs={6}
              lg={4}
            >
              <img
                src={shop}
                style={{ objectFit: "cover" }}
                width="100%"
                height={
                  md
                    ? "92px"
                    : lg
                    ? "168px"
                    : "214px"
                }
                alt=""
              />
              <Typography
                variant="h3"
                mt={{ xs: 2, lg: 5 }}
                mb={{ xs: 2, lg: 4 }}
                fontWeight="400"
              >
                Магазин
              </Typography>
              <Typography
                variant="h6"
                fontWeight="500"
              >
                Телефон
              </Typography>
              <Typography
                variant="h3"
                fontWeight="600"
                mb="42.8px"
              >
                <a href="tel:+996 (707) 201 927">
                  +996 (707) 201 — 927
                </a>
              </Typography>
              <Typography
                variant="h6"
                fontWeight="500"
              >
                Адрес
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                mb={5}
              >
                ул. Льва Толстого, р-н «Баткен»,
                кон. С-42
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.452166445754!2d74.6156111153882!3d42.86329951116454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7b5421f5dc7%3A0x20eeccaa7f85d67b!2zNDIg0YPQuy4g0JvRjNCy0LAg0KLQvtC70YHRgtC-0LPQviwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1664940352006!5m2!1sru!2skg"
                height={
                  md
                    ? "92px"
                    : lg
                    ? "168px"
                    : "214px"
                }
                style={{
                  borderRadius: "7px",
                  border: "none",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
            <Grid
              item
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              xs={12}
              md={6}
              sx={{ m: "0 auto" }}
              lg={4}
            >
              <Typography
                variant="h3"
                fontSize={{ xs: 20, md: "30px" }}
                mb={2.5}
                textAlign="center"
              >
                Ответим в течение дня, заполните
                форму
              </Typography>
              <TextField
                variant="outlined"
                required
                placeholder="Имя"
                fullWidth
                {...register("name", {
                  required: true,
                })}
              />
              <TextField
                variant="outlined"
                required
                {...register("phone", {
                  required: true,
                })}
                placeholder="Телефон"
                sx={{ m: "10px 0" }}
                fullWidth
              />
              <TextField
                fullWidth
                required
                variant="outlined"
                placeholder="Сообщение"
                multiline
                rows={4}
                {...register("desc", {
                  required: true,
                })}
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contacts;
