import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import  Events  from "./pages/Events";
import { EventDetail } from "./pages/EventDetailPage";
import { NewEventPage } from "./pages/NewEventPage";
import { EditEventPage } from "./pages/EditEventPage";
import { RootLayout } from "./pages/RootLayout";
import { EventPageLayout } from "./pages/EventPageLayout";
import { eventsLoader } from "./pages/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
