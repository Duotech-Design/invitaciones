export const NavbarStyles = {
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    alignItems: "center",
    background: "#E5D4C2",
    height: "50%",
  },
  nav_desk: {
    width:'80%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    background: 'transparent',
    height: "auto",
    boxShadow: "none"
    
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    //alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    //position: "relative",
    padding: "0",
    //boxShadow: '3px 3px 5px 0px rgba(0,0,0,0.75)',
    //textAlign: 'center',
    background: `url("/img/1.1.png")`,
    //flexWrap: "wrap",
  },
  toolbar_desk: {
    display: "flex",
    background: 'transparent',
    justifyContent: "center",
    width: "auto",
  },
  expand: {
    fontSize: "36px",
  },
  iniciales: {
    textAlign: "center",
    padding: "0rem .5rem",
    flex: "1",
    //maxWidth: '15%',
    //minWidth: '10%',
    whiteSpace: "nowrap",
    borderRight: "1px solid #7D5730",
    //borderLeft: "5px solid",
    //backgroundColor: "#FFFFFF",
  },
  content: {
    textAlign: "center",
    padding: "0.7rem 1rem",
    flex: "1",
    whiteSpace: "nowrap",
    "&:hover": {
      borderBottom: "2px solid #CBB197",
    },
  },
  content_desk: {
    textAlign: "center",
    padding: "0.7rem 1.2rem",
    whiteSpace: "nowrap",
    "&:hover": {
      borderBottom: "2px solid #CBB197",
    },
  },
};
