import { makeStyles } from "@material-ui/core";
import colors from "../../helpers/colorPalette";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
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
        backgroundColor: colors.primary,
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
        borderRadius: "10px",
        width: "300px",
        height: "670px",
        margin: "0 100px 0 0",
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
        width: "100%",
    },
    inputError: {
        width: "10%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "10px",
        top: "0px",
        zIndex: "10px",
    },
    inputSuccess: {
        width: "10%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "10px",
        top: "0px",
        zIndex: "10px",
    },
    inputContainer: {
        width: "100%",
        height: "100%",
        border: "0",
        padding: "0",
        position: "relative"
    },
    error: {
        color: "red"
    },
    logo: {
        height: "100px"
    },
    datePicker: {
        width: "100%",
        margin: "5px 0",
        padding: "0px",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        },
        children: {
            border: "1px solid red"
        }
    }
}));

export default useStyles;