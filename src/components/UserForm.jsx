import React, { useState } from 'react';

function UserForm({ addUser, editingUser, setEditingUser }) {
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');

  const handleAddUser = () => {
    if (!newUserName || !newUserEmail) return;
    addUser(newUserName, newUserEmail);
    setNewUserName('');
    setNewUserEmail('');
  };

  return (
    <div>
      <h2>{editingUser ? 'Editar Usuario' : 'Agregar Usuario'}</h2>
      <label>
        Nombre:
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
      </label>
      <button onClick={handleAddUser}>
        {editingUser ? 'Guardar' : 'Agregar'}
      </button>
      {editingUser && <button onClick={() => setEditingUser(null)}>Cancelar</button>}
    </div>
  );
}

export default UserForm;
