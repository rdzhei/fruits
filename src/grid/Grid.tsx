import React from 'react';
import Tile from "./tile/Tile";



export default function Grid() {

    const width = 75 * 14 + 'px';
    const height = 75 * 10 + 'px';

    return (
        <div
            style={{
                width: width,
                height: height,
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}
        >
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>

        </div>
    );

}