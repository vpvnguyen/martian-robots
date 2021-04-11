import { useState } from "react";
import InstructionsMapper from "./instructions/InstructionsMapper";

const InstructionsForm = () => {
  const [inputString, setInputString] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      const mappedInstructions = new InstructionsMapper(inputString);
      const gridDimensions = mappedInstructions.getGridDimensions();
      const robotCommands = mappedInstructions.getRobotCommands();
      console.log("InstructionsMapper", gridDimensions, robotCommands);

      // create grid
      // send instructions to robot
      console.log("send to robot!");
    } catch (error) {
      console.error("error:", error);
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

const Grid = (props: any) => {
  return (
    <div
      style={{
        height: `${props.height * 5}rem`,
        width: `${props.width * 5}rem`,
        maxWidth: "80rem",
        maxHeight: "80rem",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: `repeat(${props.width}, minmax(0, 1fr))`,
        direction: "rtl",
      }}
    >
      {props.coordinates.map((value: any) => (
        <div
          key={value}
          className="border border-gray-500 text-center align-baseline text-tiny"
          data-coordinates={value}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const HEIGHT = 50;
  const WIDTH = 50;

  const createCoordinates = (WIDTH: any, HEIGHT: any) => {
    const coordinates = [];
    for (let yPosition = 0; yPosition < HEIGHT; yPosition++) {
      for (let xPosition = 0; xPosition < WIDTH; xPosition++) {
        coordinates.push(`${xPosition},${yPosition}`);
      }
    }
    return coordinates;
  };

  const createGrid = (coordinates: any) => {
    const reversedCoordinates = coordinates.reverse();
    return reversedCoordinates;
  };

  const coordinates = createCoordinates(WIDTH, HEIGHT);
  const reversedCoordinates = createGrid(coordinates);

  return (
    <div className="h-screen w-full container mx-auto">
      <div className="w-3/4 mx-auto">
        <InstructionsForm />
      </div>

      <div className="lg:container lg:mx-auto overflow-x-auto">
        <Grid width={WIDTH} height={HEIGHT} coordinates={reversedCoordinates} />
      </div>
    </div>
  );
};

export default App;
