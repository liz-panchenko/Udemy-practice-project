import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  return (
    <div>
      <AddUser setUsersList={setUsersList} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
