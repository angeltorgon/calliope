import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    headerContainer: {
        marginTop: "50px",
        width: "100%",
        height: "200px",
        overflow: "hidden",
        position: "absolute"
    },
    headerImage: {
        width: "100%",
    },
    editButton: {
        color: "white",
        position: "absolute"
    }
}));

export default useStyles;