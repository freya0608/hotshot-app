import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            solders:['胡子','朱子','胖子']
        }
    }

    addSolieder = ()=>{
        console.log('hello add solider');
        this.setState({
            solders:[]
        });

    };
    render() {
        return (
            <div>
                <h2>独立团</h2>
            </div>

        );
  }
}

export default App;
