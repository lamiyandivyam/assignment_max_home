# Europa Exploration Mission - Navigation Module

This project is a TypeScript-based solution for Part 1 of the MaxHome Take-Home assignment.

## Prerequisites

Need nodejs and npm installed.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-link>
    cd europa-mission
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## How to Run the Program

The program reads its instructions from an `input.txt` file located in the root of the project directory.

1.  **Prepare the Input:**
    Create or modify the `input.txt` file. The format should be as per the assignment

2.  **Execute the program:**
    Run the following command in your terminal:
    ```bash
    npm start
    ```

    This command will automatically compile the TypeScript code and run the resulting JavaScript.

3.  **View the Output:**
    The final coordinates for each robot will be printed to the console.

## Assumptions Made

As per the instructions, the following assumptions were made:

1.  **Plateau Boundaries:** Robots are constrained by the plateau's boundaries. If a move instruction (`M`) would take a robot off the grid, the instruction is **ignored**, and the robot maintains its current position and orientation. This prevents the robots from getting lost.
2.  **Valid Input:** The program assumes the `input.txt` file is correctly formatted and that all instructions and initial orientations are valid (i.e., instructions are only `L`, `R`, `M`. We have tried to make sure error are handled gracegfully 
3.  [cite_start]**Sequential Execution:** As stated in the problem, robots move one after another in the order they appear in the input file. [cite: 24]

