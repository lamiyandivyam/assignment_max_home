import { Command } from './Command';
import { Robot } from '../classes/Robot';

export class MoveCommand implements Command {
  execute(robot: Robot): void {
    robot.moveForward();
  }
}
