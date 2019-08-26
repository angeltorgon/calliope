import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    commentFormContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "60px"

    },
    commentInput: {
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        padding: "10px",
        fontSize: "1.3rem"
    },
    commentForm: {
        width: "90%",
    }
}));

export default useStyles;