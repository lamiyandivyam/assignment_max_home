import { Command } from './Command';
import { Robot } from '../classes/Robot';

export class TurnLeftCommand implements Command {
  execute(robot: Robot): void {
    robot.turnLeft();
  }
}
