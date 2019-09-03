import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    editor: {
        border: "1px solid lightgrey",
        width: "100%",
        // maxWidth: "500px",
        padding: "40px",
        marginTop: "40px",
        fontSize: ".9rem",
        height: "100%",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    }
}));

export default useStyles;