import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Events } from "./pages/Events";
import { EventDetail } from "./pages/EventDetailPage";
import { NewEventPage } from "./pages/NewEventPage";
import { EditEventPage } from "./pages/EditEventPage";
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/events", element: <Events /> },
    { path: "/events/:id", element: <EventDetail /> },
    { path: "/events/:id/edit", element: <EditEventPage /> },
    { path: "/events/new", element: <NewEventPage /> },
  ]);
  
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
