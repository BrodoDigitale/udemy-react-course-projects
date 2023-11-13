import { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "../Header.jsx";
import { useQuery, useMutation } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const { mutate, isPending, isError: isDeleteError, error: deleteError } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      }),
        navigate("/events");
    },
  });

  const handleDelete = () => {
    mutate({ id: id });
  };

  const startDeleting = () => {
    setIsDeleting(true);
  }

  const stopDeleting = () => {
    setIsDeleting(false)
  }

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
    const formattedDDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    content = (
      <>
       {isDeleting && <Modal onClose={stopDeleting}>
        <h2>Are you sure?</h2>
        <p>Delete this item permanetly?</p>
        {isPending && <LoadingIndicator/>}
        {!isPending && <div className="form-actions">
          <button className="button-text" onClick={stopDeleting}>Close</button>
          <button className="button" onClick={handleDelete}>Delete</button>
        </div>}
        {isDeleteError && <ErrorBlock title={'Failed to delete'} message={deleteError.info?.message || "Error ocurred"}/>}
       </Modal>}
        <header>
          <h1>{title}</h1>
          <nav>
            <button onClick={startDeleting}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${image}`} alt={title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDDate} @ {time}
              </time>
            </div>
            <p id="event-details-description">{description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
