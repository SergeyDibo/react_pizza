// Import the React library and the ReactDOM module
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the App component from the App.js file
import App from './App';

// Create a constant named `root` that is assigned the result of calling the
// `ReactDOM.createRoot` method on the element with the id of 'root' in the HTML document
const root = ReactDOM.createRoot(document.getElementById('root'));

// Call the `render` method on the `root` constant, passing in the JSX code for the
// App component wrapped in a React.StrictMode component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
