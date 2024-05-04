export type Maze = string[];
export interface Point {
  x: number;
  y: number;
}

const dirs = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

export default function mazeSolver(
  maze: Maze,
  wall: string,
  startPoint: Point,
  endPoint: Point
): Point[] {
  const path: Point[] = [];
  const seen = new Set<string>();
  let currentPoint: Point = startPoint;
  let arrived = false;
  seen.add(makeSeenKey(currentPoint));
  path.push(currentPoint);

  do {
    let newPoint: Point | undefined;

    for (const [x, y] of dirs) {
      const point: Point = {
        x: currentPoint.x + x,
        y: currentPoint.y + y,
      };

      // has arrived
      if (point.x === endPoint.x && point.y === endPoint.y) {
        path.push(point);
        newPoint = point;
        arrived = true;
        break;
      }

      // has seen
      const seenKey = makeSeenKey(point);
      if (seen.has(seenKey)) continue;
      seen.add(makeSeenKey(point));

      // is wall
      if (maze[point.y]?.[point.x] === wall) continue;

      // is outbound
      if (
        point.x < 0 ||
        point.x >= maze[0].length ||
        point.y < 0 ||
        point.y >= maze.length
      )
        continue;

      newPoint = point;
    }

    if (!newPoint) throw new Error("Unsolvable Maze");
    path.push(newPoint);
    currentPoint = newPoint;
  } while (arrived === false);

  return path;
}

function makeSeenKey({ x, y }: Point) {
  return [x, y].join("");
}
