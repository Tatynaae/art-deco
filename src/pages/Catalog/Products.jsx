import {
  Box,
  Button,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/styles";
import React, {
  useEffect,
  useState,
} from "react";
import {
  useNavigate,
  useParams,
} from "react-router";

import {
  useDispatch,
  useSelector,
} from "react-redux";
import { GetCategoryList } from "../../reducers/main/main-api";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { MTypography } from "../../components/Motion";

const Products = () => {
  const theme = useTheme();
  const lg = useMediaQuery(
    theme.breakpoints.down("992")
  );
  const navigate = useNavigate();
  const params = useParams();
  const { categoryPage: productList } =
    useSelector((store) => store.main);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      dispatch(
        GetCategoryList(params.title, () =>
          setLoading(false)
        )
      );
    } catch (e) {
      setLoading(false);
    }
  }, []);
  return (
    <Container maxWidth="xl">
      {productList.length ? (
        <Box
          width={{ xs: "100%" }}
          ml={{ xs: 0, lg: 0 }}
        >
          <Grid
            container
            spacing={{ xs: 2, lg: 4 }}
            mb={5}
          >
            {productList.map((item, index) => {
              return (
                <Grid
                  key={item.title + index}
                  item
                  xs={6}
                  lg={3}
                >
                  <Link
                    to={`/catalog/details/${item.title}`}
                    style={{ display: "block" }}
                  >
                    <img
                      src={item.image}
                      style={{
                        width: "100%",
                        maxWidth: "270px",
                        display: "table",
                        margin: "0 auto",
                        height: lg
                          ? 135
                          : "270px",
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
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <MTypography
              custom={3}
              variant="h2"
              mb={{ xs: 2.5, lg: 4 }}
            >
              Данные не найдены
            </MTypography>
          )}
        </Box>
      )}
      {productList && (
        <Button
          size="medium"
          onClick={() => navigate("/catalog")}
          sx={{
            display: "table",
            m: "44px auto 0",
          }}
          color="primary"
          variant="contained"
        >
          Смотреть в каталоге
        </Button>
      )}
    </Container>
  );
};

export default Products;
