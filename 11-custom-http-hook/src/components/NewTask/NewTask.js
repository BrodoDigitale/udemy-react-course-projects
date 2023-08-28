import { useHttp } from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp();

  const enterTaskHandler = async (taskText) => {
    const createTask = (taskData) => {
      const createdTask = { id: taskData.id, text: taskText };

      props.onAddTask(createdTask);
    };

    sendRequest(
      {
        url: "https://64ea398abf99bdcc8e676b68.mockapi.io/tasks",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
