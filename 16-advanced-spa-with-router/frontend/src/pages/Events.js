import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  return (
    <>
      <EventsList events={data} />
    </>
  );
}

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //todo
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
