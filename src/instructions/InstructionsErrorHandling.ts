export class InstructionsMapperError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }

  public static getMappedInstructionsError = (error: Error) => {
    console.error("Error mapping instructions.", error);
  };
}

export class InstructionsFormError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
