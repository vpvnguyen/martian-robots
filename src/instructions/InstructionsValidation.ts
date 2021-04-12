const MAX_GRID_DIMENSION: number = 51;
const MAX_COORDINATE_VALUE: number = 50;
const EXACT_GRID_DIMENSION_AMOUNT: number = 2;
const MAX_CHARACTER_LENGTH: number = 100;
const ROBOT_ORIENTATIONS: string[] = ["N", "E", "S", "W"];
const ROBOT_COMMANDS: string[] = ["L", "R", "F"];

export default class InstructionsValidation {
  public static validateInstructionsLength = (instructions: string[]) => {
    // validate if character length and if amount of instructions are correct (not divisible by 2)
    if (
      instructions.length > MAX_CHARACTER_LENGTH ||
      instructions.length % 2 === 0
    ) {
      throw new Error(`Incorrect amount of instructions detected!`);
    }

    return true;
  };

  public static validateGridDimensions = (dimensions: number[]) => {
    const isValidStructure = InstructionsValidation.isGridDimensionsStructureValid(
      dimensions
    );
    const isValidGridDimensions = InstructionsValidation.areGridDimensionsValid(
      dimensions
    );

    if (isValidStructure && isValidGridDimensions) {
      return true;
    } else {
      throw new Error("Grid Dimensions are not valid!");
    }
  };

  public static validateRobotCommands = (robotCommands: any) => {
    robotCommands.every(({ xPos, yPos, orientation, commands }: any) => {
      const xPosIsNotValid = !InstructionsValidation.validateMaxCoordinate(
        xPos
      );
      const yPosIsNotValid = !InstructionsValidation.validateMaxCoordinate(
        yPos
      );
      const orientationIsNotValid = !InstructionsValidation.validateOrientation(
        orientation
      );
      const commandsIsNotValid = !InstructionsValidation.validateCommands(
        commands
      );

      if (
        xPosIsNotValid &&
        yPosIsNotValid &&
        orientationIsNotValid &&
        commandsIsNotValid
      ) {
        throw new Error("Robot Commands are not valid!");
      }
      return true;
    });

    return true;
  };

  private static validateMaxCoordinate = (value: string) => {
    if (Number(value) > MAX_COORDINATE_VALUE)
      throw new Error(`Max allowed coordinate is ${MAX_COORDINATE_VALUE}`);

    return true;
  };

  private static validateOrientation = (value: string) => {
    if (!ROBOT_ORIENTATIONS.includes(value))
      throw new Error(`Wrong orientation!`);

    return true;
  };

  private static validateCommands = (value: string) => {
    if (value.split("").some((element) => !ROBOT_COMMANDS.includes(element)))
      throw new Error(`Invalid Commands!`);

    return true;
  };

  private static isGridDimensionsStructureValid = (
    filteredDimensions: number[]
  ) => {
    if (
      !Array.isArray(filteredDimensions) ||
      filteredDimensions.length !== EXACT_GRID_DIMENSION_AMOUNT
    ) {
      throw new Error(`Invalid Grid Dimensions!`);
    }
    return true;
  };

  private static areGridDimensionsValid = (gridDimensions: number[]) => {
    const [width, height] = gridDimensions;

    if (
      isNaN(width) &&
      isNaN(height) &&
      width > MAX_GRID_DIMENSION &&
      height > MAX_GRID_DIMENSION
    ) {
      throw new Error(`Invalid Grid Dimensions!`);
    }

    return true;
  };
}
