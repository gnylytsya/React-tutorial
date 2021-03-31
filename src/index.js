import React from 'react';
import ReactDOM from 'react-dom';

const User = (props) =>  {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

const name = "Max";


const App = function () {
  return (
    <div>
      <User name={name} age="28"/>
      <User name="John" age="32"/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));