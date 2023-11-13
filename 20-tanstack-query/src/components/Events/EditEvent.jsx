import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

    const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;
      
      //stores original data using the query key
      const previousEventData = queryClient.getQueryData(['events', id]);

      await queryClient.cancelQueries({queryKey: ['events', id]})
      queryClient.setQueryData(['events', id], newEvent);

      //return value to make availiable in the context in case of error
      return {
        previousEvent: previousEventData
      }
    },
    //on error roll back will be done
    onError: (error, data, context) => {
      queryClient.setQueryData(['events', id], content.previousEvent);
    },
    //will be called when mutation finishes no matter with which result
    //is important to align be with fe
    onSettled: () => {
      queryClient.invalidateQueries(['events', id]);
    }
  });

  function handleSubmit(formData) {
    mutate( {id, event: formData})
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

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
