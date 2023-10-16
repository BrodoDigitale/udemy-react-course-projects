import React from "react";
import { EventForm } from "../components/EventForm";
import { json, redirect } from "react-router-dom";

export const NewEventPage = () => {
  return (
    <>
      <EventForm />
    </>
  );
};
 export const newEventAction = async({request, params}) => {
  const data = await request.formData();
  
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
   const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(eventData),
   });

   if(!response.ok) {
    throw new Error('event not saved');
   }
   return redirect('/events');
 }