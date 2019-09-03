import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    editorContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        border: "1px solid red"
    },
}));

export default useStyles;