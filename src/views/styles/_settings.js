import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    settingsContainer: {
        margin: "0 auto",
        marginTop: "60px",
        maxWidth: "1000px",
        minHeight: "500px"
    },
    profileImageContainer: {
        display: "flex",
        justifyContent: "center",
        padding: "10px"
    }
}));

export default useStyles