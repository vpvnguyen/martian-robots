import {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface IInstructionsProviderProps {
  children: ReactNode;
}

interface IInstructionsContext {
  gridDimensions: any;
  setGridDimensions: Dispatch<SetStateAction<any>>;
}

const initialInstructionsContext: IInstructionsContext = {
  gridDimensions: {},
  setGridDimensions: () => {},
};

const InstructionsContext = createContext<IInstructionsContext>(
  initialInstructionsContext
);

export const InstructionsContextProvider = (
  props: IInstructionsProviderProps
) => {
  const [gridDimensions, setGridDimensions] = useState({
    width: null,
    height: null,
  });

  const instructionsContextValue: IInstructionsContext = {
    gridDimensions,
    setGridDimensions,
  };

  return (
    <InstructionsContext.Provider value={instructionsContextValue}>
      {props.children}
    </InstructionsContext.Provider>
  );
};

export const useGridDimensionsContext = () => {
  const { gridDimensions, setGridDimensions } = useContext(InstructionsContext);
  if (gridDimensions === undefined || setGridDimensions === undefined) {
    throw new Error(
      `useGridDimensionsContext: must be used within InstructionsContext.Provider`
    );
  }

  return { gridDimensions, setGridDimensions };
};
