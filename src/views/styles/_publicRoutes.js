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
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: "#d55582"
        }
    },
    card: {
        padding: "60px 50px",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "600px",
        maxWidth: "400px",
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
    formInput: {
        width: "100%",
        margin: "5px 0",
        height: "45px",
        padding: "5px",
        borderRadius: "5px",
        display: "flex",
        border: "1px solid lightgrey"
    },
    inputError: {
        width: "10%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        width: "90%",
        height: "100%",
        border: "0",
        padding: "10px"
    }
}));

export default useStyles;