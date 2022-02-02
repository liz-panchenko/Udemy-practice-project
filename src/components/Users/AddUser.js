import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";

export default function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addUserHandler} className={styles.inputForm}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" min="1" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}
