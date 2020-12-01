import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "shreya",
      image:
        "https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg",
      places: 2,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
