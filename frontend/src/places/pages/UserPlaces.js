import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const places = [
  {
    id: "p1",
    title: "Bhawani North View",
    description: "Bhawani Construction Building",
    address: "Jyangra, Baguiati",
    imageUrl:
      "https://is1-2.housingcdn.com/4f2250e8/ebf03f0f4257fb0da4849f78326c6636/v5/large/bhawani_north_view-rajarhat-kolkata-bhawani_group.jpg",
    coordinates: {
      lat: 22.6100923,
      lng: 88.4398277,
    },
    creator: "u1",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const placeList = places.filter((i) => i.creator === userId);
  return <PlaceList items={placeList} />;
};

export default UserPlaces;
