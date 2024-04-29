// En el componente principal
// import React, { useState } from 'react';
// import UserForm from './UserForm';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import UserList from './UserList';
import UserDetails from './UserDetails';
import UserForm from './UserForm';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete';

const App = () => {
 
  return (
 
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserEdit />} />
        <Route path="/delete/:id" element={<UserDelete />} />
      </Routes>
    </Router>
  </UserProvider>
    
  );
};

export default App;
