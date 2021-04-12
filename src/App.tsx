import InstructionsForm from "./instructions/InstructionsForm";
import MarsGrid from "./mars/MarsGrid";
import { InstructionsContextProvider } from "./instructions/InstructionsContext";

const App = () => {
  return (
    <div className="h-screen w-full container mx-auto">
      <InstructionsContextProvider>
        <div className="w-3/4 mx-auto">
          <InstructionsForm />
        </div>

        <div className="lg:container lg:mx-auto overflow-x-auto">
          <MarsGrid />
        </div>
      </InstructionsContextProvider>
    </div>
  );
};

export default App;
