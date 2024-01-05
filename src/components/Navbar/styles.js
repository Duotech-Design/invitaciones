export const NavbarStyles = {
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    alignItems: "center",
    background: "#E5D4C2",
    height: "50%",
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    //alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    position: "relative",
    padding: "0",
    //boxShadow: '3px 3px 5px 0px rgba(0,0,0,0.75)',
    //textAlign: 'center',
    background: `url("/img/fondoNavbar2.svg")`,
    //flexWrap: "wrap",
  },
  closing: {
    position: "absolute",
    left: "85%",
    top: "5%",
    fontSize: "24px",
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
    padding: "2rem 1rem",
    flex: "1",
    //smarginLeft:'40px',
    whiteSpace: "nowrap",
    transition: "background-color 0.3s, border-radius 0.3s", // Agrega una transición para suavizar el cambio de color de fondo y los bordes en hover
    backgroundColor: "#E5D4C2", // Color de fondo normal
    borderRadius: "5px", // Bordes redondeados normales
    "&:hover": {
      backgroundColor: "#CBB197", // Color de fondo en hover
      borderRadius: "50px", // Bordes redondeados en hover
    },
  },
};
