import React from 'react';
import Lesson4 from "./Lesson4";
import Ternarnie2 from "./Ternarnie2";
import Ternarnie from "./Ternarnie";
import ParentBlock from "./ParentBlock";


function App(props) {
    return (
        <div>
            {/*<Products />*/}
            {/*<Lesson4 />*/}
            <Ternarnie hours={20} />
            <Ternarnie2 />
            <ParentBlock />
        </div>
    );
}
export default App;

