// import React, { createContext, useState, useContext } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);

//   const addUser = (newUser) => {
//     setUsers([...users, newUser]);
//   };

//   const updateUser = (userId, updatedUser) => {
//     setUsers(users.map((user) => (user.id === userId ? updatedUser : user)));
//   };

//   const deleteUser = (userId) => {
//     setUsers(users.filter((user) => user.id !== userId));
//   };

//   return (
//     <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => useContext(UserContext);

// UserContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://65b413fe770d43aba47ae69e.mockapi.io/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

