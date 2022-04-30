import React from "react";

export default function App() {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      const res = await fetch(
        "https://6207742b92dd6600171c0dc5.mockapi.io/list1"
      );
      const result = await res.json();
      setUsers(result);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
}