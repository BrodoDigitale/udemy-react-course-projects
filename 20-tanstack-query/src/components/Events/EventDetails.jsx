import { Link, Outlet, useParams } from 'react-router-dom';
import Header from '../Header.jsx';
import { useQuery } from '@tanstack/react-query';
import { fetchEvent } from '../../util/http.js';


export default function EventDetails() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["event", { event: id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  let content;
  
  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="OOPS! An error occured"
        message={error.info?.message || "Failed to fetch"}
      />
    );
  }

  if (data) {
    const { title, image, description, date, time, location } = data;
    content =
      <>
        <header>
          <h1>{title}</h1>
          <nav>
            <button>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`url(${image})`} alt={title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{date} @ {time}</time>
            </div>
            <p id="event-details-description">{description}</p>
          </div>
        </div>
      </>
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}
