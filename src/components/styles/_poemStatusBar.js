import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    poemStatusBarContainer: {
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid whitesmoke"
    },
    icon: {
        height: "35px",
        width: "35px",
        marginLeft: "10px"
    },
    stats: {
        height: "40px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    }
}));

export default useStyles;