import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import arpen from "../../assets/images/arpen.webp";

const Card = ({ lg , el }) => {
  return (
    <Link to={`/catalog/details/Looomo`} style={{ display: "block" }}>
      <img
        src={arpen}
        style={{
          width: "100%",
          maxWidth: "270px",
          display: "table",
          margin: "0 auto",
          height: lg ? 135 : "270px",
        }}
        alt=""
      />
      <Typography variant="subtitle2" mt={1} textAlign="center">
          {/*{el.title}//sadc*/}sdc
      </Typography>
    </Link>
  );
};

export default Card;
