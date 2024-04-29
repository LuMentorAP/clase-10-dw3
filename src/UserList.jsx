// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useUserContext } from './UserContext';


// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const { usersS } = useUserContext();

//   useEffect(() => {
//     // Llamar a la función para obtener la lista de usuarios
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('https://65b413fe770d43aba47ae69e.mockapi.io/users');
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error('Error en la solicitud: ', error);
//     }
//   };
  

//   return (
//     <div>
//        <Link to={`/create`}>Agregar Usuario</Link>   
//       <h1>Lista de Usuarios</h1>
//       {/* Mostrar lista de usuarios */}
//       <ul>
//         {users.map((user) => (
        
//           <li key={user.id}>
//             <Link to={`/users/${user.id}`}>{user.name}</Link>
//           </li>
          
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;

// UserList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from './UserContext';

const UserList = () => {
  const { users, loading, error } = useUserContext();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los usuarios: {error.message}</div>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <Link to={`/create`}>Agregar Usuario</Link>
      {/* Mostrar lista de usuarios */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
