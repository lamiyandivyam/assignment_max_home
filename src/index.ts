import * as fs from 'fs';
import * as path from 'path';
import { Plateau } from './classes/Plateau';
import { Robot } from './classes/Robot';
import { parseInput } from './utils/parser';
import { AppError } from './errors/AppError';

function main() {
  try {
    // Read the input file
    const inputFilePath = path.join(process.cwd(), 'input.txt');
    const inputContent = fs.readFileSync(inputFilePath, 'utf-8');
    // Parse the size and commands
    const { plateauSize, robotCommands } = parseInput(inputContent);
    // construct plateau
    const plateau = new Plateau(plateauSize);

    // execute each robot serially
    for (const command of robotCommands) {
      const robot = new Robot(command.initialPosition, plateau);
      robot.processCommands(command.instructions);
      console.log(robot.getFinalPosition());
    }
  } catch (error) {
    if (error instanceof AppError) {
      console.error(`[Application Error] ${error.name}: ${error.message}`);
    } else {
      console.error(`[System Error] An unexpected error occurred:`, error);
    }
    process.exit(1);
  }
}

main();
