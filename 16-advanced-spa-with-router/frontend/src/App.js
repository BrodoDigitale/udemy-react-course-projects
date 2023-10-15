import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import  Events  from "./pages/Events";
import { EventDetail, eventLoader } from "./pages/EventDetailPage";
import { NewEventPage } from "./pages/NewEventPage";
import { EditEventPage } from "./pages/EditEventPage";
import { RootLayout } from "./pages/RootLayout";
import { EventPageLayout } from "./pages/EventPageLayout";
import { eventsLoader } from "./pages/Events";
import { ErrorPage } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/events",
        element: <Events />,
        loader: eventsLoader,
      },
      {
        path: "/events/:id",
        element: <EventPageLayout />,
        children: [
          {
            path: "/events/:id",
            element: <EventDetail />,
            loader: eventLoader,
          },
        ],
      },
      { path: "/events/:id/edit", element: <EditEventPage /> },
      { path: "/events/new", element: <NewEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
