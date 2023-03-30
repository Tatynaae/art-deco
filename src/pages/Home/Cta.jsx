import React, {
  useEffect,
  useState,
} from "react";
import { Box, Container } from "@mui/system";
import ctaBg from "../../assets/images/home/home-bg1.webp";
import ctaBgMobile from "../../assets/images/home/cta-bg-mobile.webp";
import ctaBlockBg from "../../assets/images/home/home-bg-3.webp";
import {
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import { useForm } from "react-hook-form";
import { ContactPost } from "../../reducers/post/post-api";
import {
  useDispatch,
  useSelector,
} from "react-redux";

const Cta = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { contact } = useSelector(
    (store) => store.post
  );
  useEffect(() => {
    if (contact === "ok") {
      setOpen(true);
      setTimeout(() => {
        document.location.reload();
      }, 600);
    }
  });
  const onSubmit = (data) => {
    dispatch(ContactPost(data));
  };
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
        pt={{ xs: "20px", lg: 0 }}
        pb={{ xs: 10, lg: 0 }}
        sx={{
          background: {
            xs: "none",
            lg: `no-repeat url(${ctaBlockBg}) center/cover`,
          },
        }}
      >
        <Container maxWidth="xl">
          <Box
            width="100%"
            display="flex"
            sx={{
              position: "relative",
              top: { xs: 0, lg: "-94px" },
              background: {
                xs: `no-repeat url(${ctaBgMobile}) bottom/cover`,
                lg: `no-repeat url(${ctaBg})  center/cover`,
              },
              boxShadow:
                "0px 37px 82px rgba(0, 0, 0, 0.25)",
              borderRadius: "9px",
              p: "40px",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              width={{ xs: "100%", lg: "33.3%" }}
            >
              <Typography
                fontSize={{ xs: 24, md: 30 }}
                textAlign="center"
                color="#000"
              >
                Запишитесь на бесплатную
                консультацию
              </Typography>
              <Typography
                variant="subtitle2"
                mt={2}
                mb={3}
                color="#000"
                textAlign="center"
              >
                Заполните форму, мы перезвоним Вам
                и согласуем дату и время приезда
                специалиста
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
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Cta;
