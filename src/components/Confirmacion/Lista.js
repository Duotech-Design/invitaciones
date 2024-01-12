
import { Button, Typography } from "@mui/material";

const styles = {
  enviada: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign: "center",
    backgroundColor: "#F4EBE2",
    padding:"10px",
    borderRadius:"10px"
  },
  confirm: {
    width: "160px",
    height: "auto",
    borderRadius: "15px",
    backgroundColor: "#E6D4C2",
    textAlign: "center",
    fontFamily: "Cormorant",
    fontSize: `clamp(12px, 2vw, 1.3rem)`,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#7D5730",
  },
  cancel: {
    width: "160px",
    height: "auto",
    borderRadius: "15px",
    backgroundColor: "#F4EBE2",
    textAlign: "center",
    fontFamily: "Cormorant",
    fontSize: `clamp(12px, 2vw, 1.3rem)`,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#7D5730",
    border: "1px solid #7D5730",
    boxShadow: "none"
  },
};

//const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Lista({ guest, check, handleCheck, confirmacion }) {
  //const [ isFollowing, setIsFollowing] = useState(false);
  const text = check ? "Confirmar" : "Cancelar";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems: "center",
        paddingTop: "10px",
      }}
    >

      <Typography variant="h17">{guest}</Typography>

      <Button variant="contained" onClick={handleCheck} sx={check ? styles.confirm : styles.cancel}>
        {text}
      </Button>

    </div>
  );
}

export default Lista