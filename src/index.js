import React from 'react'

// Look into react dom for more information
import ReactDOM from 'react-dom';

//imports our App.js component, which acts as the parent container for all components
import App from './App';

//allows us to use basic styling variables in our code
import './index.css';

//renders our App component and inserts it at the root of the index.html file inside the public folder
ReactDOM.render(<App />, document.getElementById('root'));
