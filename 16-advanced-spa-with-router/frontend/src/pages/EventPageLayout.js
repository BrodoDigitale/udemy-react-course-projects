import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export const EventPageLayout = () => {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
