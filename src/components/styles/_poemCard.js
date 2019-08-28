import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  poemCard: {
    maxWidth: "800px",
    width: "100%",
    margin: "20px auto",
    padding: "20px"
  },
  poemHeader: {
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    borderBottom: "1px solid whitesmoke"
  },
  poem: {
    padding: "25px 40px",
    overflow: "hidden",
    borderBottom: "1px solid whitesmoke",
    marginBottom: "40pxgc"
  },
  poemTitle: {
    margin: "0 auto",
    textAlign: "center",
  },
  poemStamp: {
    display: "flex",
    padding: "5px",
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
    width: "40px",
    height: "40px",
    backgroundColor: "lightgrey",
    borderRadius: "50%",
    margin: "0 10px"
  },
  menu: {
    width: "40px",
    height: "40px",
  }
}));

export default useStyles;