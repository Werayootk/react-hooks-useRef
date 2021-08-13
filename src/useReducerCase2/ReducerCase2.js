import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
};
  
const ReducerCase2 = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return <div>
        <h1>{state.count}</h1>
        <button onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}>Show Text</button>
        {state.showText && <p>Show Text</p>}
    </div>
};

export default ReducerCase2;