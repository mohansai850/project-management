import LabelledInput from "./LabelledInput";

export default function NewProject({
  onSave,
  titleRef,
  descriptionRef,
  dueDateRef,
}) {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-slate-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={onSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <LabelledInput label="Title" ref={titleRef} />
        <LabelledInput label="Description" isTextArea ref={descriptionRef} />
        <LabelledInput type="date" label="Due Date" ref={dueDateRef} />
      </div>
    </div>
  );
}
