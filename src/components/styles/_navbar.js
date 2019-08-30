import { makeStyles } from "@material-ui/core";

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
        color: "white",
        fontSize: "20px",
        height: "48px",
        width: "150px",
        textAlign: "center",
        borderRight: "1px solid whitesmoke",
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
        backgroundColor: "#FFDAD8",
        padding: "10px",
        borderLeft: ".3px solid whitesmoke",

        "&:hover": {
            backgroundColor: "#ffcccc",
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