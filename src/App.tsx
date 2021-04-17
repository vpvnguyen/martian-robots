import InstructionsForm from "./instructions/InstructionsForm";
import MarsGrid from "./mars/MarsGrid";
import Robot from "./robot/Robot";
import { InstructionsContextProvider } from "./instructions/InstructionsContext";
import { RobotContextProvider } from "./robot/RobotContext";

const App = () => {
  return (
    <div className="h-screen w-full container mx-auto">
      <InstructionsContextProvider>
        <RobotContextProvider>
          <div className="w-3/4 mx-auto">
            <InstructionsForm />
          </div>

          <div className="lg:container lg:mx-auto overflow-x-auto">
            <MarsGrid />
            <Robot />
          </div>
        </RobotContextProvider>
      </InstructionsContextProvider>
    </div>
  );
};

export default App;
