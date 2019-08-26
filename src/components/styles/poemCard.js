import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  poemCard: {
    maxWidth: "600px",
    width: "100%",
    margin: "20px auto",
    padding: "20px"
  },
  poemHeader: {
    height: "60px",
    display: "flex",
    justifyContent: "space-between"
  },
  poem: {
    height: "400px",
    padding: "25px"
  },
  poemStamp: {
    display: "flex",
    height: "100%"
  },
  stamp: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "start"
  },
  avatar: {
    width: "50px"
  },
  menu: {
    width: "50px"
  }
}));

export default useStyles;