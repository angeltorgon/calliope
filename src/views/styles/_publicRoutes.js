import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        color: "white",
        fontSize: "1rem",
        "&:hover": {
            backgroundColor: "#DA6991"
        }
    },
    card: {
        padding: "60px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "300px",
        minHeight: "600px",
        justifyContent: "center"
    },
    mockup: {
        border: "1px solid red",
        width: "300px",
        height: "600px",
        margin: "0 40px 0 0",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    loginForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "400px",
        width: "100%"
    },
    formInputs: {
        width: "100%",
        margin: "5px 0",
        height: "45px",
        padding: "5px",
        borderRadius: "5px"
    }
}));

export default useStyles;