import { useRef, useState } from "react";
import Modal from "./Modal";

export default function ButtonedTaskInput({ addTaskHandler }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modelRef = useRef();

  function onAddTask() {
    if (enteredTask.trim() === "") {
      modelRef.current.open();
      return;
    }
    addTaskHandler(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <Modal ref={modelRef} buttonText="OK!">
        <h1>Task should not be empty</h1>
        <p>Please enter task text and try again.</p>
      </Modal>
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={(event) => setEnteredTask(event.target.value)}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={onAddTask}
      >
        Add Task
      </button>
    </div>
  );
}
