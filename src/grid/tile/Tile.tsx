import React from 'react';

interface TileProps {
    x: number;
    y: number;
}

export default function Tile(tileProps: TileProps) {


    const bgColor1 = (Math.floor(Math.random() * (100 - 10) + 10)).toString();
    const bgColor2 =  (Math.floor(Math.random() * (100 - 10) + 10)).toString();
    const bgColor3 = (Math.floor(Math.random() * (100 - 10) + 10)).toString();

    return (
        <div
            style={{
                backgroundColor: '#' + bgColor1 + bgColor2 + bgColor3,
                border: '1px black',
                borderColor: 'black',
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