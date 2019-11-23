import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    editButton: {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        opacity: ".8",
        border: "none",
        transition: ".3s ease-in-out",
        borderRadius: "5px",
        "&:focus": {
            outline: "none",
            border: "0px",
        },
        "&:hover": {
            opacity: ".7"
        }
    },
    saveButton: {
        transition: ".3s ease-in-out",
        borderRadius: "5px",
        "&:focus": {
            outline: "none",
            border: "0px",
        },
        "&:hover": {
            opacity: ".7"
        }
    }
}))

export default useStyles