export class InstructionsMapperError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }

  public static constructorError = (error: Error) => {
    console.error("Error during constructing instructions map.", error);
  };
}

export class InstructionsFormError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
