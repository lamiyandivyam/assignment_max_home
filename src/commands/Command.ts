import { Robot } from '../classes/Robot';

export interface Command {
  execute(robot: Robot): void;
}
