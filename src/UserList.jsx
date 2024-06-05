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
