import { makeStyles } from "@material-ui/core";
import colors from "../../../helpers/colorPalette";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    nav: {
        backgroundColor: "#FFFFFF",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 1px 1px 1px rgba(5, 5, 5, .3)",
        color: "black",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        top: "0px",
        position: "fixed",
        width: "100%"
    },
    backButton: {
        display: "flex",
        textDecoration: "none",
        fontFamily: "charcoal",
        textAlign: "center",
        marginLeft: "10px",
        padding: "0, 20px",
        "&:hover": {
            textDecoration: "none",
            color: colors.primaryHover
        }
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
        display: "flex",
        alignItems: "center"
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
    },
    publishButton: {
        boxSizing: "border-box",
        backgroundColor: colors.primary,
        color: "white",
        height: "35px",
        margin: "5px",
        marginRight: "15px",
        "&:hover": {
            backgroundColor: "#d4618f",
            textDecoration: "none",
        },
        "&:focus": {
            outline: "none",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
    saveButton: {
        color: colors.primaryHover,
        height: "35px",
        margin: "5px",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    }
}));

export default useStyles;