import { useRef, useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import Project from "./components/Project";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const dialogRef = useRef();

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  function addTaskHandler(taskText) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      return {
        ...prevState,
        projects: prevState.projects.map((project, index) => {
          if (project.id !== prevState.selectedProjectId) {
            return project;
          }
          return {
            ...project,
            tasks: [...prevState.projects[index].tasks, { taskId, taskText }],
          };
        }),
      };
    });
  }

  function deleteTaskHandler(toBeDeletedTaskId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === prevState.selectedProjectId) {
            return {
              ...project,
              tasks: project.tasks.filter(
                (task) => task.taskId !== toBeDeletedTaskId
              ),
            };
          }
          return project;
        }),
      };
    });
  }

  function addProjectHandler() {
    setProjectState({ ...projectState, selectedProjectId: null });
  }

  function onSaveHandler() {
    const enteredTitle = titleRef.current.value.trim();
    const enteredDescription = descriptionRef.current.value.trim();
    const enteredDueDate = dueDateRef.current.value.trim();

    if (
      enteredTitle === "" ||
      enteredDescription === "" ||
      enteredDueDate === ""
    ) {
      console.log("empty");
      dialogRef.current.open();
      return;
    }

    setProjectState((prevState) => {
      const id = Math.random();
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [
          ...prevState.projects,
          {
            id,
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
            tasks: [],
          },
        ],
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleProjectClick(selectedProjectId) {
    setProjectState((prevState) => ({ ...prevState, selectedProjectId }));
  }

  function handleDelete() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }

  let tasks = [];
  if (selectedProject?.tasks?.length > 0) tasks = selectedProject.tasks;

  let content = (
    <Project
      project={selectedProject}
      handleDelete={handleDelete}
      addTaskHandler={addTaskHandler}
      deleteTaskHandler={deleteTaskHandler}
      tasks={tasks}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <NoProject addProjectHandler={addProjectHandler} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <>
        <Modal ref={dialogRef} buttonText="OK!">
          <h2 className="text=xl font-bold text-stone-800 my-4">
            Empty Input!
          </h2>
          <p className="text-stone-700 mb-4">please enter the values.</p>
        </Modal>
        <NewProject
          onSave={onSaveHandler}
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          dueDateRef={dueDateRef}
          handleCancel={handleCancel}
        />
      </>
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        addProjectHandler={addProjectHandler}
        projects={projectState.projects}
        handleProjectClick={handleProjectClick}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
