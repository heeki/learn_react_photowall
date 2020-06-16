import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';

// list for rendering
// const tasks = ['test1', 'test2', 'test3'];

// list creation via code
// const element = React.createElement('ol', null,
//   tasks.map((task, index) => React.createElement('li', { key: index }, task))
// );

// list creation via jsx
// const element = <div>
//   <h3>Task List</h3>
//   <ol>
//     { tasks.map((task, index) => <li key={index}>{task}</li>) }
//   </ol>
// </div>
// ReactDOM.render(element, document.getElementById('root'));

const store = createStore();

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));