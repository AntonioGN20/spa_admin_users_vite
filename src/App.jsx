
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Antonio', email: 'L202023566@gmail.com' },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const addUser = (name, email) => {
    if (editingUser) {
      const updatedUsers = users.map((user) =>
        user.id === editingUser ? { ...user, name, email } : user
      );
      setUsers(updatedUsers);
      setEditingUser(null);
    } else {
      const newUser = {
        id: users.length + 1,
        name,
        email,
      };
      setUsers([...users, newUser]);
    }
  };

  const editUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditingUser(id);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="container"> 
     <div className="container" style={{ backgroundColor: '#ffaaaa' }}></div>
      <UserForm addUser={addUser} editingUser={editingUser} setEditingUser={setEditingUser} />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkQpZ_cVil2JHsWu-hRNLotowZh1AaytV5LzIfn_Abw&s"/>

    </div>
  );
}

export default App;

