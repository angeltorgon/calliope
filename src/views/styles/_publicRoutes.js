import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid red",
        height: "100vh"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: "100%"
    },
    button: {
        width: "100%",
        height: "40px",
        margin: "10px",
        fontSize: "1.2rem",
        backgroundColor: "#DA6991",
        maxWidth: "400px",
        "&:hover": {
            backgroundColor: "#DA6991"
        }
    },
    card: {
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "300px",
        minHeight: "600px"
    },
    mockup: {
        border: "1px solid red",
        width: "300px",
        height: "600px",
        margin: "0 20px 0 0"
    },
    loginForm: {
        display: "flex",
        flexDirection: "column"
    }
}));

export default useStyles;