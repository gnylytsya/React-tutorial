import {Component} from 'react';

import User from "../User";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Max',
            date: new Date(),
            age: 27
        }
    }

    render(){
        return (
            <div>
              <User/>
              <User
              name={this.state.name} 
              age={this.state.age} 
              time={this.state.date}/>
              <User name="John" age="32"/>
            </div>
          )
    }
    
}


export default App;