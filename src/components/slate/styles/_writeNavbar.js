import { makeStyles } from "@material-ui/core";

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
        textDecoration: "none",
        fontFamily: "charcoal",
        color: "white",
        fontSize: "20px",
        padding: "3px",
        textAlign: "center",
        borderRadius: "50%",
        "&:hover": {
            color: "white",
            textDecoration: "none",
            backgroundColor: "#EAEBEB"
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
        backgroundColor: "#DE6998",
        color: "white",
        height: "35px",
        margin: "5px",
        marginRight: "15px",
        "&:hover": {
            backgroundColor: "#d4618f",
            textDecoration: "none",
        }
    },
    saveButton: {
        color: "#DE6998",
        height: "35px",
        margin: "5px"
    }
}));

export default useStyles;