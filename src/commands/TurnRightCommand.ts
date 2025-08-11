import { Command } from './Command';
import { Robot } from '../classes/Robot';

export class TurnRightCommand implements Command {
  execute(robot: Robot): void {
    robot.turnRight();
  }
}
