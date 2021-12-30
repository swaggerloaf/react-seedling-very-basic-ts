import React from 'react';

type ButtonProps = {
  onClick: (event: React.SyntheticEvent) => void;
  text: string;
};

const App = (props: ButtonProps): JSX.Element => {
  return (
    <button
      className="btn btn-danger"
      type="button"
      onClick={(e) => props.onClick(e)}
    >
      {props.text}
    </button>
  );
};

export default App;
