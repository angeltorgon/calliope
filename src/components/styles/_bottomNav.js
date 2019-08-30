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
    menuButton: {
        marginRight: theme.spacing(2)
    },
    logo: {
        textDecoration: "none",
        fontFamily: "charcoal",
        color: "white",
        fontSize: "20px",
        height: "48px",
        width: "150px",
        textAlign: "center",
        "&:hover": {
            color: "white",
            textDecoration: "none",
            backgroundColor: "#DE6998"
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
    linkPink: {
        fontSize: "20px",
        textDecoration: "none",
        color: "grey",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
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