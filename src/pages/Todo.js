import Todo from "../components/Todo";

export default function Index({ todos, setTodos }) {
  return (
    <>
      <Todo todos={todos} setTodos={setTodos} />
    </>
  );
}
//TODO remove this
