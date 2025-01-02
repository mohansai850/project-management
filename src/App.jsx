import { useRef, useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const dialogRef = useRef();

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
          },
        ],
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProject addProjectHandler={addProjectHandler} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <>
        <Modal ref={dialogRef}>
          <h1>Error</h1>
          <p>please enter the values.</p>
        </Modal>
        <NewProject
          onSave={onSaveHandler}
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          dueDateRef={dueDateRef}
        />
      </>
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        addProjectHandler={addProjectHandler}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
