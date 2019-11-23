import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    headerContainer: {
        marginTop: "50px",
        width: "100%",
        height: "200px",
        position: "relative"
    },
    headerImage: {
        width: "100%",
        height: "100%",
        boxShadow: "0 1px 3px 2px rgba(5, 5, 5, .3)",
    },
    editButton: {
        position: "absolute",
        bottom: "10px",
        right: "20px"
    },
    profileImageContainer: {
        position: "absolute",
        bottom: "-60px",
        left: "100px"
    }
}));

export default useStyles;