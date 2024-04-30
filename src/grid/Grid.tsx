import React from 'react';
import {usePopulateTiles} from "./tile/tilePopulator";



export default function Grid() {

    const width: string = 75 * 15 + 'px';
    const height: string = 75 * 11 + 'px';

    const tiles = usePopulateTiles();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',

            }}
        >

            <div
                style={{
                    width: width,
                    height: height,
                    border: '1px solid black',
                    display: 'grid',
                    gridTemplateColumns: '25px 1fr 25px',
                    gridTemplateRows: '25px 1fr 25px',
                }}
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>
        </div>
    );

}