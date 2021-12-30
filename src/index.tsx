import React, { useReducer } from 'react';
import * as ReactDOM from 'react-dom';

import './styles.scss';

interface Todo {
  title: string;
  description: string;
}

const todo: Partial<Todo> = {
  title: 'Call Fred'
};

const initState = { count: 0 };

type ACTIONTYPE =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: string };

function reducer(state: typeof initState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="text-danger">
      Count: {state.count}
      <button
        className="btn btn-danger btn-lg"
        onClick={() => dispatch({ type: 'decrement', payload: '5' })}
      >
        -
      </button>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch({ type: 'increment', payload: 5 })}
      >
        +
      </button>
    </div>
  );
}

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(<Counter />);
