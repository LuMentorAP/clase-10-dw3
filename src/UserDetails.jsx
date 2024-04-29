// 

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootswatch/dist/superhero/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// En el componente principal
import React, { useEffect, useState } from 'react';
const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Llamar a la función para obtener la lista de usuarios
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('URL_DE_TU_API');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {/* Mostrar lista de usuarios */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;

