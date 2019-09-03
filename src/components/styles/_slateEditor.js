import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    editor: {
        border: "1px solid lightgrey",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "800px",
        maxHeight: "500px",
        padding: "40px",
        fontSize: ".9rem",
        height: "1000px",
        margin: "0 20px",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    }
}));

export default useStyles;