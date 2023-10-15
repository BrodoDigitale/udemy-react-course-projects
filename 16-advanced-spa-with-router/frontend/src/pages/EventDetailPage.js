import React from "react";
import EventItem from "../components/EventItem";
import { useRouteLoaderData } from "react-router-dom";

export const EventDetail = () => {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;
  return (
      <EventItem event = {event} />
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