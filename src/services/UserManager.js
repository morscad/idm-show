import React, { useContext, useState, useEffect } from "react";
const UserManager = ({ context }) => {
  const [state, setState] = useContext(context);
  setTimeout(() => {
    let users = state.users;
    let direction = Math.random();

    if (users.length < 5) {
      users.push({});
    } else {
      if (direction < 0.5) {
        users.push({});
      } else if (direction > 0.5) {
        users.pop();
      }
    }
    setState({users: users});

  }, 3000);
  return <></>;
};

export default UserManager;
