import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    link: {
        textUnderlineOffset: "3px",
        color: "#ef8e01 !important",
        textDecoration: "underline !important",
        // fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            color: "rgb(171,102,1) !Important"
        }
    }
}));

export const VicoLink = props => {
    const classes = useStyles();
    return (
        <a
            onClick={props.onClick}
            href={props.href}
            target={props.target}
            className={classes.link}
            style={{
                fontSize: props.fontSize || undefined,
                ...props.style
            }}
        >
            {props.children}
        </a>
    );
};
