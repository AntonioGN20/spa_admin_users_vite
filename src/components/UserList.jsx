import React from 'react';

function UserList({ users, editUser, deleteUser }) {
  return (
    <div>
      <h1>Administración de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => editUser(user.id)}>Editar</button>
            <button onClick={() => deleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
