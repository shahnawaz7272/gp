import { recpCounter } from "../store";

const ResP = () => {
  const recp = recpCounter((state) => state.recp);
  const updateField = recpCounter((state) => state.updateField);
  const add = recpCounter((state) => state.add);
  const recps = recpCounter((state) => state.recps);
    const resetForm = recpCounter((state) => state.resetForm);
  const handleform = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(recps);
    add(); // Call the add function to add the recipe to the list
    resetForm(); // Reset the form after submission
    // Optionally, you can also log the current state of the recipe here
     // Log the current state of the recipe
  };

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Directly update the field corresponding to the input name
    updateField(name, value);
    console.log(recp);
  };

  // Define types for the form state

  return (
    <div>
      <form onSubmit={handleform}>
        <input
          name="title"
          value={recp.title}
          type="text"
          placeholder="name of recipie"
          onChange={handlechange}
        ></input>
        <input
          name="ingridients"
          value={recp.ingridients}
          type="text"
          placeholder="ingridients"
          onChange={handlechange}
        ></input>
        <input
          name="instruction"
          value={recp.instruction}
          type="text"
          placeholder="instruction"
          onChange={handlechange}
        ></input>
        <button className="bg-gray-700 px-4 py-2">submit</button>
      </form>
    </div>
  );
};

export default ResP;
