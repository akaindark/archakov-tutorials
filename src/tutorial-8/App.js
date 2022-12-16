import React from 'react';

const App = () => {
  const[users, setUsers] = React.useState([]);

  const getUsers = () => {
    fetch('https://62537a9090266e3d0e037cfb.mockapi.io/users').then(response => {
      response.json().then(result => {
        setUsers(result);
      });
    });
  }

  return (
    <div>
      <ul>
        {users.map(obj => (
          <li key={obj.id}>
            {obj.id}. {obj.name}
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
};

export default App;