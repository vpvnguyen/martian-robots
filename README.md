# martian-robots

## Problem: Martian Robots

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
