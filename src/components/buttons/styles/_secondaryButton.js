import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    secondaryButton: {
        transition: ".3s ease-in-out",
        borderRadius: "5px",
        opacity: ".7",
        "&:focus": {
            outline: "none",
            border: "0px",
        },
        "&:hover": {
        opacity: ".8"
        }
    }
}))

export default useStyles