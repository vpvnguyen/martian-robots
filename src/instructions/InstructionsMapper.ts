import { InstructionsMapperError } from "./InstructionsErrorHandling";

export default class InstructionsMapper {
  private readonly INPUT_SEPARATOR: string = "\n";
  private readonly inputString: string;
  private gridDimensions: string | null | undefined;
  private robotCommands: string[] | null | undefined;

  constructor(inputString: string) {
    this.inputString = inputString;
    this.gridDimensions = null;
    this.robotCommands = null;

    try {
      const instructionsSet = this.parseInstructionsSet(this.inputString);
      const filteredInstructions = this.filterInstructions(instructionsSet);
      const trimmedInstructions = this.trimInstructions(filteredInstructions);
      const { gridDimensions, unmappedInstructions } = this.mapGridDimensions(
        trimmedInstructions
      );
      const robotCommands = this.mapRobotCommands(unmappedInstructions);

      this.setGridDimensions(gridDimensions);
      this.setRobotCommands(robotCommands);
    } catch (error) {
      InstructionsMapperError.getMappedInstructionsError(error);
    }
  }

  public getGridDimensions = () => this.gridDimensions;

  public getRobotCommands = () => this.robotCommands;

  private setGridDimensions = (gridDimensions: any) => {
    this.gridDimensions = gridDimensions;
  };

  private setRobotCommands = (robotCommands: any) => {
    this.robotCommands = robotCommands;
  };

  private parseInstructionsSet = (inputString: string) => {
    const instructionSet = inputString.trim().split(this.INPUT_SEPARATOR);
    return instructionSet;
  };

  private filterInstructions = (instructions: string[]) => {
    const filteredInstructions = instructions.filter(
      (instruction: string) => instruction
    );
    return filteredInstructions;
  };

  private trimInstructions = (instructions: string[]) => {
    const trimmedInstructions = instructions.map((instruction: string) =>
      instruction.trim()
    );
    return trimmedInstructions;
  };

  private mapGridDimensions = (instructions: string[]) => {
    const [gridDimensions, ...restOfInstructions] = instructions;
    return {
      gridDimensions,
      unmappedInstructions: [...restOfInstructions],
    };
  };

  private filterGridDimensions = (gridDimensions: string) => {
    const unfilteredDimensions = gridDimensions.split(" ");
    console.log("unfilteredDimensions", unfilteredDimensions);
    const filteredGridDimensions = unfilteredDimensions.filter(
      (dimension: any) => dimension
    );
    return filteredGridDimensions;
  };

  private mapRobotCommands = (unmappedInstructions: any) => {
    console.log("unmappedInstructions", unmappedInstructions);
  };
}
