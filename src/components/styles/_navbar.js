import { makeStyles } from "@material-ui/core";
import colors from "../../helpers/colorPalette";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    nav: {
        backgroundColor: "#FFFFFF",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 1px 3px 2px rgba(5, 5, 5, .3)",
        color: "black",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    logo: {
        textDecoration: "none",
        fontFamily: "charcoal",
        color: colors.primary,
        fontSize: "35px",
        height: "48px",
        width: "150px",
        textAlign: "center",
        fontFamily: "'Satisfy', cursive",
        padding: "5px",
        fontWeight: "bolder"
    },
    link: {
        fontSize: "20px",
        textDecoration: "none",
        color: "white",
        height: "100%",
        width: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DA6991",
        "&:hover": {
            textDecoration: "none",
            color: "white",
            textDecoration: "none",
            backgroundColor: "#DE6998"
        }
    },
    linkContainer: {
        height: "100%",
        width: "auto",
        display: "flex"
    },
    linkPink: {
        fontSize: "20px",
        textDecoration: "none",
        color: "grey",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",

        "&:hover": {
            backgroundColor: "whitesmike",
            color: "black",
            textDecoration: "none"
        }
    },
    logout: {
        width: "40px",
        height: "40px",
    }
}));

export default useStyles;