import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactMarkdown from 'react-markdown'
const input = '# This is a header\n\nAnd this is a paragraph'

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<ReactMarkdown source={input} />, document.getElementById('root'));

serviceWorker.unregister();