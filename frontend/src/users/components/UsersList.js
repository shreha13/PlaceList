import React from "react";
import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No User found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((i) => (
        <UserItem
          key={i.id}
          name={i.name}
          id={i.id}
          image={i.image}
          placeCount={i.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
