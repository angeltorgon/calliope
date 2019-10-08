import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textInputContainer: {
        width: "100%",
    },
    textInput: {
        width: "100%",
        height: "40px",
        margin: "5px 0",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        fontSize: ".9rem",
        padding: "10px",

        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
}));

export default useStyles;