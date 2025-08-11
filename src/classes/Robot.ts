import { Position, Direction, Coordinates } from '../types/navigation';
import { Plateau } from './Plateau';
import { Command } from '../commands/Command';
import { ValidationError } from '../errors/ValidationError';

export class Robot {
  private position: Position;
  private readonly plateau: Plateau;

  // clockwise direction
  private static readonly directions: Direction[] = ['N', 'E', 'S', 'W'];

  private static readonly DIRECTION_VECTORS: Record<Direction, Coordinates> = {
    N: { x: 0, y: 1 },
    E: { x: 1, y: 0 },
    S: { x: 0, y: -1 },
    W: { x: -1, y: 0 },
  };

  constructor(initialPosition: Position, plateau: Plateau) {
    if (!plateau.areCoordinatesValid(initialPosition)) {
      throw new ValidationError(
        `Initial robot position (${initialPosition.x},${initialPosition.y}) is outside the plateau boundaries.`
      );
    }

    this.position = { ...initialPosition };
    this.plateau = plateau;
  }

  // process each command here for a robot
  public processCommands(commands: Command[]): void {
    if (!commands || commands.length === 0) {
      return;
    }

    for (const command of commands) {
      if (!command) {
        throw new ValidationError('Encountered null or undefined command');
      }
      command.execute(this);
    }
  }

  public turnLeft(): void {
    const currentIndex = Robot.directions.indexOf(this.position.direction);

    if (currentIndex === -1) {
      throw new ValidationError(`Invalid direction: ${this.position.direction}`);
    }

    const newIndex = (currentIndex - 1 + Robot.directions.length) % Robot.directions.length;
    this.position.direction = Robot.directions[newIndex];
  }

  public turnRight(): void {
    const currentIndex = Robot.directions.indexOf(this.position.direction);

    if (currentIndex === -1) {
      throw new ValidationError(`Invalid direction: ${this.position.direction}`);
    }

    const newIndex = (currentIndex + 1) % Robot.directions.length;
    this.position.direction = Robot.directions[newIndex];
  }

  // returns true if the move was successful, false if it was blocked by boundaries
  // Assumption: Have not throwed exception in this case.
  public moveForward(): boolean {
    const directionVector = Robot.DIRECTION_VECTORS[this.position.direction];

    if (!directionVector) {
      throw new ValidationError(`Invalid direction: ${this.position.direction}`);
    }

    const candidatePosition: Coordinates = {
      x: this.position.x + directionVector.x,
      y: this.position.y + directionVector.y,
    };

    if (this.plateau.areCoordinatesValid(candidatePosition)) {
      this.position = { ...this.position, ...candidatePosition };
      return true;
    }

    // invalid move. Robot stays here as is.
    return false;
  }

  public getFinalPosition(): string {
    return `${this.position.x} ${this.position.y} ${this.position.direction}`;
  }

  public getCurrentPosition(): Position {
    return { ...this.position };
  }
}
