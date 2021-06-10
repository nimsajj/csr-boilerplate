import { makeStyles } from "@material-ui/core/styles";

export const topMenuStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
}));
