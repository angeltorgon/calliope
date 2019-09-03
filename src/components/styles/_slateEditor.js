import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    editor: {
        border: "1px solid lightgrey",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "800px",
        maxHeight: "500px",
        padding: "40px",
        marginTop: "60px",
        fontSize: ".9rem",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    }
}));

// formInput: {
//     width: "100%",
//     margin: "5px 0",
//     height: "45px",
//     padding: "10px",
//     borderRadius: "5px",
//     display: "flex",
//     border: "1px solid lightgrey",
//     fontSize: ".9rem",
//     "&:focus": {
//         outline: "none",
//         backgroundColor: "#fffafc",
//         boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
//         border: "0px",
//     }

export default useStyles;