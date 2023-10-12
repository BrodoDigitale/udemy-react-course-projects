import React from "react";
import EventsList from "../components/EventsList";

const DUMMY_EVENTS = [
  {
    id: "1",
    title: "Event1",
    date: "1st of November",
    image:
      "https://plus.unsplash.com/premium_photo-1696879454010-6aed21c32fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
  },
  {
    id: "2",
    title: "Event2",
    date: "3rd of November",
    image:
      "https://plus.unsplash.com/premium_photo-1696879454010-6aed21c32fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
  },
  {
    id: "3",
    title: "Event3",
    date: "5th of November",
    image:
      "https://plus.unsplash.com/premium_photo-1696879454010-6aed21c32fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
  },
];

export const Events = () => {
  return (
    <>
      <h1>Events</h1>
      <EventsList events={DUMMY_EVENTS}/>
    </>
  );
};
