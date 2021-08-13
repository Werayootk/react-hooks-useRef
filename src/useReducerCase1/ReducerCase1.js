import React, { useState } from 'react';

const ReducerCase1 = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    return <div>
        <h1>{count}</h1>
        <button onClick={() => {
            setCount(count + 1);
            setShowText(!showText);
        }}>Show Text</button>
        {showText && <p>Show Text</p>}
    </div>
};

export default ReducerCase1;