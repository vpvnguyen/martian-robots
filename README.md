# martian-robots

## How to Run

> Requirements: Yarn or NPM

- `git clone` repository and `cd` into the root of the project.
- Run `yarn install` to install dependencies.
- Run `yarn start` to start development server.
- Navigate to `http://localhost:3000` and enjoy!

## Technologies

- React 17.0.2
- TypeScript 4.1.2
- TailwindCSS 2.1.0

## Design

The project was designed into 3 primary parts:

- Instructions Form
- Mars Grid
- Robot

### Instructions Form - Parse, Interpret, and Validate

> `./src/instructions/`

- Created a large text area (`InstructionsForm.tsx`) to support a long string user input as suggest by the instructions and sample input.
- When the user submits the form, an Instructions Mapper (`InstructionsMapper.ts`) interprets and parses the single input.
- Created an Instructions Validation library (`InstructionsValidation.ts`) to validate and stop execution as early as possible - checking against cases such as length, type, format, etc.
- Created an Instructions Error Handling library (`InstructionsErrorHandling.ts`) to help trace through the Error Stack to help debug any oversights.
- Once the data has been parsed and validated, an Instructions Context Provider (`InstructionsContext.tsx`) shares the grid dimensions and robot commands across necessary components.

### Mars Grid - Dynamically Render and Plot Coordinates to a Responsive Grid

> `./src/mars/`

- Leveraged CSS Grid to dynamically create a Grid for our robot to move.
- The Grid will dynamically render based on the user's input.
- The next steps are to be plotting the robot's starting position and orientation.
- Utilize a mixture of the robot's state and CSS to navigate across the Grid.
- Add animations and markers to convey robot's movement and when it encounters the edge.

### Robot - Create a Stateful Manager to Track Stats

> `./src/robot/`

- For now, a placeholder component was created for our robot.
- The next steps are to create a state machine to manage and track our robot's progress.
- Create custom hooks using a mixture of Context, Reducers, and State to update over time.
- Create a new mapper where our robot can reference the direction it will be moving in depending on it's position and orientation

### Closing Thoughts

- A very fun challenge!
- I wanted to follow the project guidelines as closely as possible while keeping the packages as small as possible.
- Some things I started but did not complete:

1. Refactor the styling since it was in a very experimental state. Instead, create and abstract into layers where it is responsible for 1) layouts, 2) component arrangements, 3) self-contained component styles decoupled from logic.
2. Design a UI / UX friendly presentational layer - guiding users with instructions on how to use the app and handle errors.
3. Refactor the Validation library to be more robust while reducing the computation costs.
4. Complete the type definitions across the files and abstract them into their own type / interface files.
5. Leverage and use the Error handling library and replace the new Errors thrown across the app.
6. Actually finishing the assignment!

## The Challenge

### Problem: Martian Robots

A certain plateau on Mars can be modeled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines the final position of a robot given a sequence of movement instructions and provide a simple user interface to animate each robot's movements. A robot's position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). A robot movement instruction sequence is a string of the letters "L", "R", and "F" which represent, respectively, the instructions:

Left: the robot turns left 90 degrees and remains on the current grid point.
Right: the robot turns right 90 degrees and remains on the current grid point.
Forward: the robot moves forward one grid point in the direction of the current orientation and maintains the same orientation.
The direction north corresponds to the direction from grid point (x, y) to grid point (x, y + 1). A robot that moves "off" an edge of the plateau is lost forever. However, lost robots leave markers which prevent future robots from dropping off the plateau at the same grid point. The marker is left at the last grid position the robot occupied before disappearing over the edge. An instruction to move "off" the plateau from a grid point at which a robot has been previously lost is simply ignored by the current robot.

The Input

The first line of input specifies the width and height of the rectangular Martian plateau. The lower-left coordinates are 0, 0. The top-right coordinates of grid of width 6 and height 4 would be x: 5 and y: 3. The remaining input consists of a sequence of robot positions and instructions (two lines per robot). A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W), all separated by whitespace on one line. A robot move instruction sequence is a string of the letters "L", "R", and "F" on one line. Each robot's instructions are processed sequentially, i.e., the first robot finishes executing its instruction set before the second one starts its instructions. The maximum value for any coordinate is 50. All instruction strings will be less than 100 characters in length.

The Output

For each robot position/instruction in the input, the output should indicate the final grid position and orientation of the robot. If a robot falls off the edge of the grid the word "LOST" should be printed after the position and orientation.

The User Interface

Implement a simple user interface to receive an input string in the format given, display the appropriate output string, and animate the progress of robots through their instruction sets.

Sample Input

6 4

1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL

Sample Output

1 1 E
3 3 N LOST
2 3 S
