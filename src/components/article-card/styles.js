import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        margin: theme.spacing(2, 0),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse",
        },
    },
    details: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cardText: {
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        "& p": {
            margin: 0,
        },
    },
    avatar: {
        backgroundColor: red[500],
    },
    postImage: {
        margin: "0 auto",
        background: "#777",
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    media: {
        height: "150px",
    },
}));

export default useStyles;
