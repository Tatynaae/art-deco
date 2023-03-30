import { ThemeProvider } from "@mui/system";
import {
  Route,
  Routes,
  useLocation,
} from "react-router";
import { theme } from "./theme";
import "remixicon/fonts/remixicon.css";
import Contacts from "./pages/Contacts";
import { Box, Fab, Toolbar } from "@mui/material";
import "@fancyapps/ui/dist/fancybox.css";

import { useEffect, useState } from "react";
import { ScrollTop } from "./components/ScrollTop";
import {
  useDispatch,
  useSelector,
} from "react-redux";
//pages
import ServicesPage from "./pages/Services";
import Products from "./pages/Catalog/Products";
import Details from "./pages/Portfolio/Details";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/Catalog/Details";
import Home from "./pages/Home";
import Buttons from "./components/Buttons";
import About from "./pages/About";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import SideBar from "./shared/Drawer";

import Portfolio from "./pages/Portfolio";
import { GetCategoryList } from "./reducers/main/main-api";

function App({ props }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (open) setOpen(false);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <ScrollTop {...props}>
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
        >
          <i
            className="ri-arrow-up-s-line"
            style={{
              fontSize: 24,
              color: "#000",
            }}
          />
        </Fab>
      </ScrollTop>
      <Toolbar
        id="back-to-top-anchor"
        style={{ position: "absolute", right: 0 }}
      />
      <Header
        open={open}
        setOpen={setOpen}
      />
      <Box
        component="main"
        pt={
          location.pathname !== "/" && {
            xs: "140px",
            lg: "219px",
          }
        }
        pb={
          location.pathname !== "/" && {
            xs: "120px",
            lg: "120px",
          }
        }
        backgroundColor="#1E1F25"
      >
        <Routes>
          <Route
            path="/contacts"
            element={<Contacts />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/portfolio/details/:id"
            element={<Details />}
          />
          <Route
            path="/catalog"
            element={<Catalog />}
          />
          <Route
            path="/catalog/details/:id"
            element={<ProductDetails />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/catalog/:title"
            element={<Products />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/services"
            element={<ServicesPage />}
          />
        </Routes>
      </Box>
      <Footer />
      <Buttons />
      <SideBar
        open={open}
        setOpen={setOpen}
      />
    </ThemeProvider>
  );
}

export default App;
