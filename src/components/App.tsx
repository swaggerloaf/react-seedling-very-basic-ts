import React, { useState } from 'react';
import Button from './Button';

const App = (): JSX.Element => {
  const [count, setCount] = useState<number | null>(null);

  return (
    <div className="card">
      <div className="card-body">
        <Button
          text="Increment"
          onClick={() => {
            setCount(count ? count + 1 : 1);
          }}
        ></Button>
        <Button
          text="Decrement"
          onClick={() => {
            setCount(count ? count - 1 : -1);
          }}
        ></Button>
      </div>
      <div className="card-footer">Current count is : {count}</div>
    </div>
  );
};

export default App;
