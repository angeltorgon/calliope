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
    linkContainer: {
        height: "100%",
        width: "85%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    searchInput: {
        width: "90%",
        margin: "5px 0",
        height: "45px",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        border: "1px solid lightgrey",
        fontSize: ".9rem",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
}));

export default useStyles;