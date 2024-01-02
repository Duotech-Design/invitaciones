//import { Box, Typography } from "@mui/material";

const styles = {
  section: {
    background: `url("/img/FotoFooter.jpg")`,
    backgroundSize: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    width: "100%",
    height: "700px",
    backgroundAttachment: "fixed",
    
  },
  sectionDos: {
    background: `url("/img/Ad.jpg")`,
    backgroundSize: "100%",
    width: "100%",
    height: "500px",
    backgroundAttachment: "fixed",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    borderTop: '8px dashed hsla(10deg, 40%, 70%, 0.75)',
    borderBottom: '8px dashed hsla(10deg, 40%, 70%, 0.75)',
    backgroundOrigin: 'border-box', // content-box padding-box
  },
  sectionTres: {
    //width: "100%",
    paddingBottom: "100%", /* Establece una relación de aspecto 1:1 (100% de ancho y alto igual al ancho) */
    border: "0.5px solid hsla(0deg, 0%, 60%, 0.5)",
    padding: "1rem",
    fontSize: "5rem",
    fontWeight: "bold",
    textAlign: "center",
    backgroundImage: 'url("https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=690&q=80")',
    backgroundSize: "contain",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  }
  /*ejemplo: {
    display: "flex",
    flexFlow: "column nowrap",
  },*/

};
export default function SectionUno() {
  return (
   <>
    <div style={styles.section}>
    </div>
    <div style={styles.sectionDos}>
    </div>
    {/*<div style={styles.sectionTres}>
        Zoy
    </div>*/}

    </>
  );
}
