import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    profileImage: {
        height: "120px",
        width: "120px",
        boxShadow: "0 1px 3px 2px rgba(5, 5, 5, .3)",
        borderRadius: "50%",
        border: "2px solid white"
    }
}));

export default useStyles;