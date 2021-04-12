import InstructionsValidation from "./InstructionsValidation";
import { InstructionsMapperError } from "./InstructionsErrorHandling";

export default class InstructionsMapper {
  private readonly INPUT_SEPARATOR: string = "\n";
  private readonly inputString: string;
  private gridDimensions: any;
  private robotCommands: {
    xPos: string | null | undefined;
    yPos: string | null | undefined;
    orientation: string | null | undefined;
    commands: string | null | undefined;
  };

  constructor(inputString: string) {
    this.inputString = inputString;
    this.gridDimensions = null;
    this.robotCommands = {
      xPos: null,
      yPos: null,
      orientation: null,
      commands: null,
    };

    try {
      const instructionsSet = this.parseInputString(this.inputString);

      // validate if robot commands are correct (not divisible by 2)
      InstructionsValidation.validateInstructionsLength(instructionsSet);

      const { gridDimensions, robotCommands } = this.mapInstructions(
        instructionsSet
      );

      InstructionsValidation.validateGridDimensions(gridDimensions);
      InstructionsValidation.validateRobotCommands(robotCommands);

      this.setGridDimensions(gridDimensions);
      this.setRobotCommands(robotCommands);
    } catch (error) {
      InstructionsMapperError.constructorError(error);
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

  private parseInputString = (inputString: string) => {
    const instructionSet = inputString.trim().split(this.INPUT_SEPARATOR);
    const trimmedInstructions = this.trimInstructions(instructionSet);
    const filteredInstructionsSet = this.removeEmptyElements(
      trimmedInstructions
    );
    return filteredInstructionsSet;
  };

  private removeEmptyElements = (unfilteredInstructions: string[]) => {
    const filteredInstructions = unfilteredInstructions.filter(
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

  private parseRobotCommands = (array: string[]) => {
    const robotCoordinates = array.filter((element, index) => index % 2 === 0);
    const robotMoveCommands = array.filter((element, index) => index % 2 !== 0);

    const robotCommands = robotCoordinates.map((element, index) => {
      const splitCoordinates = element.split(" ");
      return {
        xPos: splitCoordinates[0],
        yPos: splitCoordinates[1],
        orientation: splitCoordinates[2],
        commands: robotMoveCommands[index],
      };
    });

    return robotCommands;
  };

  private mapInstructions = (instructions: string[]) => {
    const [dimensions, ...restOfInstructions] = instructions;
    const gridDimensions = this.setGridDimensionsToNumber(dimensions);
    const robotCommands = this.parseRobotCommands(restOfInstructions);
    return {
      gridDimensions,
      robotCommands,
    };
  };

  private setGridDimensionsToNumber = (dimensions: string) => {
    const dimensionsList = dimensions.split(" ");
    const filteredDimensions = dimensionsList.filter(
      (dimension: string) => dimension
    );
    const width = Number(filteredDimensions[0]);
    const height = Number(filteredDimensions[1]);

    return [width, height];
  };
}
