import Tile from "./Tile";


export function usePopulateTiles()
{
    let res = [];

    for (let i = 0; i <= 11; i++) {
        for (let j = 0; j <= 15; j++) {
            res.push(<Tile x={j} y={i} />)
        }
    }

    return res;
}