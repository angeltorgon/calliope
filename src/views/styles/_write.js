import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    editorContainer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 0px 60px 0px",
        height: "100vh",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        minWidth: "500px"
    },
    title: {
        height: "30px"
    },
    body: {
        height: "400px"
    }
}));

export default useStyles;