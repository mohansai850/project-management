import ButtonedTaskInput from "./ButtonedTaskInput";

export default function Tasks({ addTaskHandler, deleteTaskHandler, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <ButtonedTaskInput
        addTaskHandler={addTaskHandler}
        deleteTaskHandler={deleteTaskHandler}
      />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">No Tasks to display.</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-sm bg-stone-100">
          {tasks.map((task) => (
            <li key={task.taskId} className="flex justify-between my-4">
              <span>{task.taskText}</span>
              <button className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
