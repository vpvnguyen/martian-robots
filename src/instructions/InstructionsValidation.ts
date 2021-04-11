export default class InstructionsValidtion {
  private readonly MAX_GRID_DIMENSION: number = 51;
  private readonly MAX_COORDINATE_VALUE: number = 50;
  private readonly EXACT_GRID_DIMENSION_AMOUNT: number = 2;
  private readonly gridDimensions: string | undefined | null = null;

  constructor(gridDimensions: string) {
    this.gridDimensions = gridDimensions;
  }

  public InstructionsValidtion = ({ dimensions, commands }: any) => {
    const dimensionArray = dimensions.split(" ");
    console.log("dimensionArray", dimensionArray);
    const trimmed = dimensionArray.filter((dimension: any) => dimension);
    if (
      Array.isArray(trimmed) &&
      trimmed.length === this.EXACT_GRID_DIMENSION_AMOUNT
    ) {
      const [width, height] = trimmed;

      // 12e3 = 12000, cant use Number()
      // console.log(height);
      console.log("width", !isNaN(width));
      console.log("height", !isNaN(height));
      console.log("width", Number(width));
      console.log("height", Number(height));
      console.log("width", Number(width) <= this.MAX_GRID_DIMENSION);

      if (
        !isNaN(width) &&
        !isNaN(height) &&
        Number(width) <= this.MAX_GRID_DIMENSION &&
        Number(height) <= this.MAX_GRID_DIMENSION
      ) {
        return {
          width,
          height,
        };
      }
    }

    throw new Error("Not valid dimensions!");
  };
}
