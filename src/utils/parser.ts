import { Direction, Instruction, ParsedInput, Position, RobotCommand } from '../types/navigation';
import { Command } from '../commands/Command';
import { MoveCommand } from '../commands/MoveCommand';
import { TurnLeftCommand } from '../commands/TurnLeftCommand';
import { TurnRightCommand } from '../commands/TurnRightCommand';
import { ValidationError } from '../errors/ValidationError';

function instructionToCommand(instruction: Instruction): Command {
  switch (instruction) {
    case 'L': return new TurnLeftCommand();
    case 'R': return new TurnRightCommand();
    case 'M': return new MoveCommand();
    default:
      throw new ValidationError(`Invalid instruction character: '${instruction}'`);
  }
}

export function parseInput(inputContent: string): ParsedInput {
  const lines = inputContent.trim().split('\n').map(line => line.trim()).filter(Boolean);
  
  if (lines.length < 3 || lines.length % 2 === 0) {
    throw new ValidationError('Invalid input format: Input must contain plateau size and pairs of robot data.');
  }

  const [plateauX, plateauY] = lines[0].split(' ').map(Number);
  const robotCommands: RobotCommand[] = [];

  for (let i = 1; i < lines.length; i += 2) {
    const [x, y, direction] = lines[i].split(' ');
    const initialPosition: Position = {
      x: parseInt(x, 10),
      y: parseInt(y, 10),
      direction: direction as Direction,
    };

    const instructions = (lines[i + 1].split('')).map(char => instructionToCommand(char as Instruction));
    robotCommands.push({ initialPosition, instructions });
  }

  return {
    plateauSize: { x: plateauX, y: plateauY },
    robotCommands,
  };
}
