import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ addProjectHandler }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty project image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text=xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Please select a project or create a new one
      </p>
      <Button onClick={addProjectHandler}>Create a new project</Button>
    </div>
  );
}