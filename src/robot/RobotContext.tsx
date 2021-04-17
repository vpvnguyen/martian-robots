import { createContext, useContext, useState, useReducer } from "react";

const initialRobotContextState: any = {
  xPos: null,
  yPos: null,
  orientation: null,
  commands: null,
};

// test dispatching actions
const reducer = (action: any, state: any) => {
  switch (action.type) {
    case "N":
      return console.log("N");
    case "S":
      return console.log("S");
    case "E":
      return console.log("E");
    case "W":
      return console.log("E");
    default:
      return console.log("default");
  }
};

const RobotContext = createContext(initialRobotContextState);

export const RobotContextProvider = (props: any) => {
  const [robotCommands, setRobotCommands] = useState(null);

  const value = {
    robotCommands,
    setRobotCommands,
  };

  return (
    <RobotContext.Provider value={value}>
      {props.children}
    </RobotContext.Provider>
  );
};

export const useRobotContext = () => {
  const { robotCommands, setRobotCommands } = useContext(RobotContext);
  return { robotCommands, setRobotCommands };
};
