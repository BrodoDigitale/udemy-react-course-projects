import React from "react";
import EventItem from "../components/EventItem";
import { useParams } from "react-router-dom";

export const EventDetail = (event) => {
  const params = useParams();
  return (
    <>
      <h1>EventDetail</h1>
      <p>this event id: {params.id}</p>
      <EventItem event = {event} />
    </>
  );
};
