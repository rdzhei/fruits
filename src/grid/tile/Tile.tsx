import React from 'react';

interface TileProps {
    x: number;
    y: number;
}

export default function Tile(tileProps: TileProps) {

    const width: string = tileProps.x === 0 || tileProps.x > 14 ? '35px' : '75px';
    const height: string = tileProps.y === 0 || tileProps.y > 10 ? '35px' : '75px';

    const bgColor1 = (Math.floor(Math.random() * (100 - 10) + 10)).toString();
    const bgColor2 =  (Math.floor(Math.random() * (100 - 10) + 10)).toString();
    const bgColor3 = (Math.floor(Math.random() * (100 - 10) + 10)).toString();

    return (
        <div
            style={{
                width: width,
                height: height,
                backgroundColor: '#' + bgColor1 + bgColor2 + bgColor3,
                border: '1px black',
                borderColor: 'black',
            }}
        >

        </div>
    );

}