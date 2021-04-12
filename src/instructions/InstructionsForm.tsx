import { useState } from "react";
import { useGridDimensionsContext } from "./InstructionsContext";
import InstructionsMapper from "./InstructionsMapper";
import { InstructionsFormError } from "./InstructionsErrorHandling";

const initialInputStringState: string = "";

const InstructionsForm = () => {
  const [inputString, setInputString] = useState(initialInputStringState);
  const { setGridDimensions } = useGridDimensionsContext();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      const mappedInstructions = new InstructionsMapper(inputString);
      const gridDimensions = mappedInstructions.getGridDimensions();
      const robotCommands = mappedInstructions.getRobotCommands();

      // TODO:
      // save robotCommands to state

      setGridDimensions({
        width: gridDimensions[0],
        height: gridDimensions[1],
      });
    } catch (error) {
      console.error("There was an issue submitting instructions!", error);
    }
  };

  const handleChange = (event: any) => {
    setInputString(event.target.value);
  };

  return (
    <div className="w-full p-10">
      <label htmlFor="instructions">Instructions:</label>
      <textarea
        className="p-4 placeholder-blueGray-300 text-blueGray-600 bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
        rows={10}
        name="instructions"
        value={inputString}
        onChange={handleChange}
      />
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default InstructionsForm;
