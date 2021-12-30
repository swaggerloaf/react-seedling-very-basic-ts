import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles.scss';
import App from './components/App';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
