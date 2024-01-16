import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from "@mui/material";
import axios from 'axios';
import TextField from "@mui/material/TextField";
import Swal from 'sweetalert2'
const styles = {
  button: {
    height: `clamp(1.8rem, 2.5rem, 3.5rem)`,
    borderRadius: "40px",
    backgroundColor: "#7D5730",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontStyle: "normal",
    fontWeight: "400px",
    lineHeight: "normal",
    marginBottom: "10px",
    color: "#F4EBE2",
  },
  logoContainer: {
    position: "absolute",
    top: "20px",
    background: `url("/img/1.2.png")`,
    height: "auto", 
    backgroundSize: "contain",
    backgroundRepeat:"no-repeat",
    marginBottom:"20px"
  },
};

export default function LogIn() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('hola')
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      }, {
        withCredentials: true,
      });
      console.log('response', response.status)
      if (response.status === 200) {
        await localStorage.setItem('usuarioLogeado', JSON.stringify(response.data))
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: 'Tus credenciales son correctas. ¡Bienvenido!',
          didClose: () => {
            navigate('/dashboard');
          },
        });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: 'Verifica tu correo y contraseña e intenta nuevamente.',
      });
    }
  };
  
  return (
    <Box
      sx={{
        background: `url("/img/fondoNavbar.svg")`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Box style={styles.logoContainer}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "35ch" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            marginTop: "350px",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Correo"
            variant="filled"
            color="quinary"
            focused
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Contraseña"
            variant="filled"
            color="quinary"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            focused
          />
          <Button
            variant="contained"
            sx={{ ...styles.button, textAlign: "center" }}
            onClick={handleSubmit}
          >
            INGRESAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
