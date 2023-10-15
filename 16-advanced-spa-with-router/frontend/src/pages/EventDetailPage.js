import React from "react";
import EventItem from "../components/EventItem";
import { useLoaderData } from "react-router-dom";

export const EventDetail = () => {
  const data = useLoaderData();
  const event = data.event;
  return (
    <>
      <h1>EventDetail</h1>
      <EventItem event = {event} />
    </>
  );
};

export const eventLoader = async({request, params}) => {
    const response = await fetch(`http://localhost:8080/events/${params.id}`);

  if (!response.ok) {
    // return { error: true, message: "Failed to load data"}
    throw new Error("Failed to load data");
  } else {
    return response;
  }

}