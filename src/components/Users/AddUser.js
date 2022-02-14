import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length > 1 && +enteredAge >= 1) {
      props.setUsersList((prevUsersList) => {
        return [...prevUsersList, { name: enteredUsername, age: enteredAge }];
      });
      setEnteredUsername("");
      setEnteredAge("");
    } else {
      alert("Enter data");
    }
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.inputForm}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
          autoComplete="off"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          min="1"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
