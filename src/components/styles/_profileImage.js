import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    profileImageContainer: {
        maxWidth: "1000px",
        width: "100%",
        margin: "0 auto",
        marginBottom: "60px",
        position: "relative",
    },
    profileImage: {
        position: "absolute",
        height: "120px",
        width: "120px",
        boxShadow: "0 1px 3px 2px rgba(5, 5, 5, .3)",
        borderRadius: "50%",
        top: "-60px",
        border: "2px solid white"
    }
}));

export default useStyles;