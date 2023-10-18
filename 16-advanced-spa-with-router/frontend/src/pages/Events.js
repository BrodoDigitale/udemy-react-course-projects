import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
import { defer, Await, json } from "react-router-dom";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();
  console.log(events)
  return (
    <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { error: true, message: "Failed to load data"}
    throw new Error("Failed to load data");
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const eventsLoader = () => {
  return defer({
    //deferred function must return a promise
    events: loadEvents(),
  });
};
