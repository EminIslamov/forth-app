import React from 'react';
import "./styles.css";

function Ternarnie2(props) {
    const dark = true;
    return (
        <div>
            {dark &&  (
                <div className="dark">

                </div>)
            }
        </div>

    );
}

// Задача 4 в "ParentBlock"


export default Ternarnie2;