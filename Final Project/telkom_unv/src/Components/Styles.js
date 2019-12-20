import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    // nav \\
    logo: {
      width: 200,
      height: "auto",
    },
    nav: {
      alignContent: "right",
    },
    link: {
      display: "inline-block",
      marginLeft: 20,
      textDecoration: "none",
    },
    // ed of nav
    footertext :{
      color : "white"
    }
  }));

export default useStyle