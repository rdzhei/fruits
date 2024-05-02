import React from 'react';

interface TileProps {
    x: number;
    y: number;
    contentType?: number;
}

export default function Tile(tileProps: TileProps)
{

    const border: string = tileProps.contentType ? '1px solid' : '';

    return (
        <div
            style={{
                margin: '1px',
                border: border,
                borderColor: '#000011',
                borderStyle: 'dotted',

            }}
        >
            <p
                style={{
                    color: 'red',
                    fontSize: '10px',
                    textAlign: 'center',

                }}
            >
                {'x:' + tileProps.x  + ' y:' + tileProps.y}
            </p>

        </div>
    );

}