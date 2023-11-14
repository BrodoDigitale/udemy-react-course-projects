import { Link, redirect, useNavigate, useSubmit } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { redirect, useSubmit } from "react-router-dom";

export default function EditEvent() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { id } = useParams();

  const { data, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  function handleSubmit(formData) {
    //is not actually submitting data but triggering 
    //router action function
    submit(formData, {method: 'PUT'})
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || "Failed to fetch"}
        />
        <Link to={"../"} className="button" Okay></Link>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

//there is no need to remove useQuery from thw component!
//useQuery will use cached data
export const loader = ({params}) => {
  return queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  });
};

export async function action ({request, params}) {
  const formData = await request.formData();
  const updatedEvent = Object.entries(formData);
  await updateEvent({id: params.id, event: updatedEvent});
  await queryClient.invalidateQueries(['events']);
  return redirect("../");
}