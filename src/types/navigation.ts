import { Command } from '../commands/Command';

export type Direction = 'N' | 'E' | 'S' | 'W';

export type Instruction = 'L' | 'R' | 'M';

export interface Coordinates {
  x: number;
  y: number;
}

export interface Position extends Coordinates {
  direction: Direction;
}

export interface RobotCommand {
  initialPosition: Position;
  instructions: Command[];
}

export interface ParsedInput {
  plateauSize: Coordinates;
  robotCommands: RobotCommand[];
}
