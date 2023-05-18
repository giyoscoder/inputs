import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css';

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user, idx) => {
          return (
            <li key={idx}>
              {user.name} ({user.age}  years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
