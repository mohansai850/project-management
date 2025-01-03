import ButtonedTaskInput from "./ButtonedTaskInput";

export default function Task({ addTaskHandler, deleteTaskHandler, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <ButtonedTaskInput addTaskHandler={addTaskHandler} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-sm ">
          {tasks.map((task) => (
            <li
              key={task.taskId}
              className="flex justify-between my-4 bg-stone-300 p-4"
            >
              <span>{task.taskText}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => deleteTaskHandler(task.taskId)}
              >
                Clear Task
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
