import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    dialogButton: {
        textDecoration: "none",
        fontFamily: "charcoal",
        color: "white",
        fontSize: "20px",
        padding: "3px",
        textAlign: "center",
        borderRadius: "50%",
        width: "50px",
        "&:hover": {
            color: "white",
            textDecoration: "none",
            backgroundColor: "#EAEBEB"
        }
    },
    dialogHotDog: {
        height: "40px",
        width: "30px",
        outline: "none",

    },
    menuDialog: {
        borderRadius: "5px",
        maxWidth: "400px",
        width: "250px",
        minWidth: "200px",
        padding: "10px"
    },
    menuOption: {
        margin: "3px",
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        "&:focus": {
            outline: "none",
        }
    }
}));

export default useStyles;