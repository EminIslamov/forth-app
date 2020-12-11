import React from 'react';
import Small from "./Small";
import Large from "./Large";

function ParentBlock(props) {
    const number = 40;

    if (number < 50){
        return <Small />
    }

    return <Large />
}

export default ParentBlock;