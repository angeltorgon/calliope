import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    editorContainer: {
        border: "1px solid lightgrey",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "800px",
        maxHeight: "500px",
        height: "100%",
        padding: "40px",
        margin: "60px 20px"
    }
}));

export default useStyles;