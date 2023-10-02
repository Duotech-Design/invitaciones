import { Container, Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function ColorsTimeline() {
  return (
    <Timeline sx={{ width: "100%", height:"100%" }} position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
         
          <TimelineConnector />
          
        </TimelineSeparator>
        <TimelineContent sx={{ textAlign: "center", height:"400px" }}>
          <div sx={{display:"flex", alignItems:"baseline" , width:"100%"}}>
        <div
          style={{ borderBottom: "0.5px solid #7D5730", width: "30%", padding:"0px 0px 0px 0px", margin:"0px 0px 0px 0px" }}
        ></div>
        <Typography>
          6:00 PM
          </Typography>
          </div>
          <Typography>CEREMONIA RELIGIOSA</Typography>
          <Typography> Parroquia maria madre</Typography>
          <Typography>de la divina gracia</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <TimelineContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center"
          }}
        >
          8:00 PM
          <Typography>RECEPCIÓN</Typography>
          <Typography> SALÓN DE EVENTOS</Typography>
          <Typography>TALLER 2560</Typography>
        </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const styles = {
  box: {
    //color: "D9D9D9",
    height: "200px",
    width: "100%",
    backgroundColor: "#D9D9D9",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  box2: {
    height: "100%",
    width: "100%",
    backgroundColor: "#D9D9D9",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
};

const Itinerario = () => {
  return (
    <>
      <Container
        sx={{
          height: "600px",
          width: "100%",
          display: "flex",
          paddingLeft: "0px",
          paddingRight: "0px",
          flexDirection: "column",

          //alignItems: "center",
          //color: "white",
          marginTop: "0",
        }}
      >
        <div style={styles.box}></div>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: "1" }}>
            <div style={styles.box2}></div>
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              //gap: "0.2rem",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography variant="h2" sx={{ marginBottom: "10px" }}>
              {" "}
              ITINERARIO{" "}
            </Typography>
            {/* <div style={{ borderLeft: "0.5px solid #7D5730", width: "50%" }}>
        
            
              <Typography variant="h8" sx={{ typography: "bold" }}>
                SALON DE EVENTOS
              </Typography>
              <Typography
                variant="h8"
                sx={{ typography: "bold", marginBottom: "10px" }}
              >
                TALLER 2560
              </Typography>
            
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography variant="h8"> SOLO ADULTOS </Typography>
              <Typography
                variant="h11"
                sx={{ marginBottom: "10px", textAlign: "center" }}
              >
                LLEVAR IDENTIFIACIÓN OFICIAL.
              </Typography>
            </div>
            <Typography variant="hora" sx={{ marginBottom: "10px" }}>
              {" "}
              20:00 hrs.{" "}
            </Typography>
            <Typography
              variant="h11"
              sx={{ marginBottom: "10px", textAlign: "center" }}
            >
              {" "}
              AV. CONSTITUCIÓN 2560, CONSTITUYENTES 2DA SECC. 78622.
            </Typography>
            <button style={styles.button}>¿COMO LLEGAR?</button>
            </div>
            */}
            <ColorsTimeline />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Itinerario;
