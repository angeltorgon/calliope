import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    nav: {
        backgroundColor: "#FFFFFF",
        border: 0,
        borderRadius: 3,
        boxShadow: "4px 1px 3px 3.5px rgba(5, 5, 5, .3)",
        color: "black",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        width: "100%"
    },
    icon: {
        color: "lightpink"
    }
}));

export default useStyles;