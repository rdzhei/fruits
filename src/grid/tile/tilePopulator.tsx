import Tile from "./Tile";


export function usePopulateTiles() {

    let x: number = 0;
    let y: number = 0;

    let res = [];

    while (x < 16 && y < 12) {

        res.push(<Tile x={x} y={y}  />)
        x++;
        if (x > 15) {
            x = 0;
            y++;
        }
    }

    console.log(res)

    return res;
}