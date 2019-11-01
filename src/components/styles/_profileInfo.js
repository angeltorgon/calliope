import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    profileInfoContainer: {
        heigtht: "800px",
        maxWidth: "1000px",
        margin: "0 auto",
        width: "100%",
        padding: "0 20px"
    },
    userStatsContainer: {
        display: "flex",
    },
    stat: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px 20px 0 0"
    }
}));

export default useStyles;