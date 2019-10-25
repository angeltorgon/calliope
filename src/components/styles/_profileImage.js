import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    profileImageContainer: {
        position: "absolute",
        width: "100px",
        height: "100px",
        left: "15%",
        bottom: "-30px"
    },
    profileImage: {
        position: "absolute",
        height: "120px",
        width: "120px",
        boxShadow: "0 1px 3px 2px rgba(5, 5, 5, .3)",
        borderRadius: "50%"
    }
}));

export default useStyles;