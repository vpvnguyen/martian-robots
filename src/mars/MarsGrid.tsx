import { useGridDimensionsContext } from "../instructions/InstructionsContext";

const MarsGrid = () => {
  const {
    gridDimensions: { width, height },
  } = useGridDimensionsContext();

  const createCoordinates = (width: number, height: number) => {
    const coordinates = [];
    for (let yPosition = 0; yPosition < height; yPosition++) {
      for (let xPosition = 0; xPosition < width; xPosition++) {
        coordinates.push(`${xPosition},${yPosition}`);
      }
    }
    return coordinates.reverse();
  };

  const coordinates = createCoordinates(width, height);

  return (
    <>
      {width && height && (
        <div
          style={{
            height: `${width * 5}rem`,
            width: `${height * 5}rem`,
            maxWidth: "80rem",
            maxHeight: "80rem",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`,
            direction: "rtl",
          }}
        >
          {coordinates.map((value: any) => (
            <div
              key={value}
              className="border border-gray-500 text-center align-baseline text-tiny"
              data-coordinates={value}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MarsGrid;
