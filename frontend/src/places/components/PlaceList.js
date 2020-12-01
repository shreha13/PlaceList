import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import './PlaceList.css'

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Place Found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((i) => (
        <PlaceItem
          key={i.id}
          id={i.id}
          title={i.title}
          address={i.address}
          image={i.imageUrl}
          description={i.description}
          creatorId={i.creator}
          location={i.coordinates}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
