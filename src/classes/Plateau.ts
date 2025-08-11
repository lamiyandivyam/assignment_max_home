import { Coordinates } from '../types/navigation';

export class Plateau {
  public readonly minX = 0;
  public readonly minY = 0;
  public readonly maxX: number;
  public readonly maxY: number;

  constructor(size: Coordinates) {
    this.maxX = size.x;
    this.maxY = size.y;
  }

  public areCoordinatesValid(coordinates: Coordinates): boolean {
    return (
      coordinates.x >= this.minX &&
      coordinates.x <= this.maxX &&
      coordinates.y >= this.minY &&
      coordinates.y <= this.maxY
    );
  }
}
