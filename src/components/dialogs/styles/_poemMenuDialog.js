import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    dialogButton: {
        height: "50px",
        width: "20px",
        padding: "5px",
        borderRadius: "50%",
        outline: "none",
    },
    dialogHotDog: {
        height: "40px",
        width: "30px",
        outline: "none",

    }
}));

export default useStyles;