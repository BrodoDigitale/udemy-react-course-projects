import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EditEventPage } from "./pages/EditEventPage";
import { ErrorPage } from "./pages/Error";
import { EventDetailPage,
  eventDetailLoader,
  deleteEventAction,
} from "./pages/EventDetailPage";
import { RootLayout } from "./pages/RootLayout";
import EventsPage, { eventsLoader } from "./pages/Events";
import { HomePage } from "./pages/Home";
import { NewEventPage } from "./pages/NewEventPage";
import { EventPageLayout } from "./pages/EventPageLayout";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import { AuthenticationPage } from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <AuthenticationPage />},
      {
        path: "events",
        element: <EventPageLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
