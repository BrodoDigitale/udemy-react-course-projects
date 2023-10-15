import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  if (data.error) {
    return <p>{data.message}</p>
  }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { error: true, message: "Failed to load data"}
    throw new Error("Failed to load data");
  } else {
    return response;
  }
};
