import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    dialogButton: {
        height: "50px",
        width: "20px",
        padding: "5px",
        borderRadius: "50%",
        outline: "none",
        "&:focus": {
            outline: "none",
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