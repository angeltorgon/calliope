import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    profileInfoContainer: {
        heigtht: "800px",
        border: "1px solid whitesmoke",
        maxWidth: "1000px",
        margin: "0 auto",
        marginTop: "60px",
        width: "100%"
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