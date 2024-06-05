import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserDelete from './UserDelete';
import UserEdit from './UserEdit';
const UserList = () => {

  const navigate = useNavigate()
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    // Llamar a la función para obtener la lista de usuarios
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://6657819d5c36170526450fee.mockapi.io/users/${id}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  const goHome = () => {
    navigate('/')
  }


  return (
    <div>
      <h1>{user.name}</h1>
     <p>{user.email}</p>
     <button onClick={goHome}>Volver</button>
     <UserDelete />
     <UserEdit />
    </div>
  );
};
export default UserList;

