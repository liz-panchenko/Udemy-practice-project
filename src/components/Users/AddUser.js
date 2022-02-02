import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <Card className={styles.inputForm}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" min="1" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
