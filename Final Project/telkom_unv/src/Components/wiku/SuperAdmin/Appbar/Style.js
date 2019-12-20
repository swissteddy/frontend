export const styleAppbar = theme => ({
    // appbar style
    sideLinkBox: {
        marginTop: 20,
        textAlign: "left",
    },

    sideLink: {
         textDecoration: "none",
    
    },

    Paper: {
        minHeight: "100vh",
        backgroundColor: "#D93636",
    },

    sideLinkText: {
        color: "White",
        paddingLeft: 30,
        paddingRight: 20,
        textDecoration: 'none',
        dislay: 'block',
        '&:hover': {
            width: "100%",
            backgroundColor: "#D9A0A0",
            padding: 10,
        },
        '&:active': {
            width: 200,
            backgroundColor: "#D9A0A0",
            padding: 5, 
        },
    },
    
    topBar: {
        backgroundColor: "#F25050",
        color: "white",
        paddingTop: 10,
        paddingBottom: 10,
    },

    icons: {
        fontSize: 35,
    },
    
    logo: {
        width: 180,
        paddingTop: 20,
    },

    bodyDash: {
        padding: 20,
        margin: 20,
    },
    // popper
      root: {
        display: 'flex',
      },
      paper: {
        marginRight: theme.spacing(2),
      },
      icons: {
        fontSize: 35,
      },
    //popper

    //end of appbar style
});