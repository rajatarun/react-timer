import React, { Component } from 'react';
import Time from './components/Time/time';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        var date =  new Date();
        this.state = {
            time: ''
        };
    }

  render() {
    return (
      <div className="App">
          <h1>{this.state.time}</h1>
          <Time data={this.onTimeUpdate.bind(this)}/>
      </div>
    );
  }
    onTimeUpdate(value){
        var time = (Number(value.hours) * 60 * 60 ) + (Number(value.minutes) * 60) + (Number(value.seconds));
        for (var i = 1; i < 99999; i++)
            window.clearInterval(i);
        var timeInt = setInterval(function(){
            var date = new Date(null);
            date.setSeconds(time);
            date = date.toISOString().substr(11,8);
            time -= 1;
            this.setState({'time': date});
            if(time <= 0){
                clearInterval(timeInt);
            }
        }.bind(this),1000)
    }
}

export default App;
