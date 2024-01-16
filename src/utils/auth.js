import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));
    if (!usuarioLogeado) {
      navigate('/login');
      return;
    }

    setUser(usuarioLogeado);
  }, [navigate]);

  return user;
}

export default useAuth;