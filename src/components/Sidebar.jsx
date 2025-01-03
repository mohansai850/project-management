import Button from "./Button";

export default function Sidebar({
  addProjectHandler,
  projects,
  handleProjectClick,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold md:text-xl text-stone-200">My Projects</h2>
      <Button onClick={addProjectHandler}>+ Add New Project</Button>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => handleProjectClick(project.id)}
              className={`w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 ${
                project.id === selectedProjectId
                  ? "text-stone-200 bg-stone-700"
                  : "text-stone-400"
              }`}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
