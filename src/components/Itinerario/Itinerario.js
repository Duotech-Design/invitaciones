import { Container, Box } from "@mui/material";

const styles = {
  box: {
    //color: "D9D9D9",
    height: "200px",
    width: "100%",
    backgroundColor:  "#D9D9D9",
    paddingLeft:"0px", 
    paddingRight:"0px"
  },
};

const Itinerario = () => {
  return (
    <>
      <Container
        sx={{
          height: "200px",
          width: "100%",
          display: "flex",
          paddingLeft:"0px", 
          paddingRight:"0px",
       
          //alignItems: "center",
          //color: "white",
          marginTop: "0",
        }}
      >
        <div style={styles.box}></div>
      </Container>
    </>
  );
};

export default Itinerario;
