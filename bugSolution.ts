interface Coordinate {
    x: number;
    y: number;
}

function printCoord(pt: Coordinate) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });