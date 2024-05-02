import Tile from "./Tile";


export function useDrawTiles()
{
    let res = [];

    for (let i = 0; i <= 11; i++) {
        for (let j = 0; j <= 15; j++) {
            res.push(<Tile x={j} y={i} contentType={1} />)
        }
    }

    return res;
}