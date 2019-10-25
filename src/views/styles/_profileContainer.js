import { makeStyles } from "@material-ui/core";
import colors from "../../helpers/colorPalette";

const useStyles = makeStyles(theme => ({
    profileContainer: {
        display: "flex",
        height: "100vh",
        width: "100%",
        flexDirection: "column"
    },
}));

export default useStyles;