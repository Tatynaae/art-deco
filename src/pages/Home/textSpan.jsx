import React from 'react';
import {makeStyles} from "@mui/styles";

const TextSpan = ({title}) => {
    const classes = useStyles();
    return (
        <p className={title.length > 14 ? classes.title1 : ""} style={{color : "black", position : "relative"}}>{title}</p>
    );
};

export default TextSpan;
const useStyles = makeStyles((theme) => ({
    title1 : {
        width : "150px"
    },
}))
