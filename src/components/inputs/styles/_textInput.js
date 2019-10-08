import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textInputContainer: {
        width: "100%",
    },
    textInput: {
        width: "100%",
        height: "50px",
        margin: "5px 0",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        fontSize: ".9rem",
        padding: "10px",

        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
        }
    },
}));

export default useStyles;