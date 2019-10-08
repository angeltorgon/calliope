import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textInputContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "0px"
    },
    textInput: {
        width: "100%",
        height: "50px",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        fontSize: ".9rem",

        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
        }
    },
    formInputError: {
        border: "1px solid red"
    },
    errorMessage: {
        color: "red",
        fontSize: ".8rem",
        margin: "0px"
    }
}));

export default useStyles;