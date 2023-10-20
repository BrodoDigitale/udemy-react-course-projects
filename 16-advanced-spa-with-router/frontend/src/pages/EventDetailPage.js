import React from "react";
import EventItem from "../components/EventItem";
import { redirect, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../util/auth";

export const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;
  return (
      <EventItem event = {event} />
  );
};

export const eventDetailLoader = async({request, params}) => {
    const response = await fetch(`http://localhost:8080/events/${params.eventId}`);

  if (!response.ok) {
    // return { error: true, message: "Failed to load data"}
    throw new Error("Failed to load data");
  } else {
    return response;
  }

}

export const deleteEventAction = async({request, params}) => {
  const token = getAuthToken();
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: request.method,
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  });
    if (!response.ok) {
      throw new Error("Failed to delete event");
    } else {
      return redirect('/events');
    }
}