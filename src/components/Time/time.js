import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import './time.css'
class Time extends Component {
    constructor(props){
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    render() {
        return (
            <div className="createBorder">
               <div>
                   <div className="inputBox">
                       <label for="hours"> Hours</label>
                   <NumericInput id="hours"  min={0} max={23}  value={this.state.hours} onChange={this.handleHourChange.bind(this)}/>
                   </div>
                   <div className="inputBox">
                       <label for="minutes"> minutes</label>
                   <NumericInput id="minutes"  min={0} max={59}  value={this.state.minutes} onChange={this.handleMinuteChange.bind(this)}/>
                   </div>
                   <div className="inputBox">
                       <label for="seconds"> seconds</label>
                   <NumericInput id="seconds"  min={0} max={59} value={this.state.seconds} onChange={this.handleSecondChange.bind(this)}/>
                   </div>


               </div>
                <div className="buttonCollection">
                    <input id="start" type="button" value="Start" onClick={this.sendTime.bind(this)}/>
                    <input id="clear" type="button" value="Clear" onClick={this.resetTime.bind(this)}/>
                </div>
            </div>
        );
    }
    sendTime(){
        this.props.data(this.state);
    }

    handleHourChange(value){
        var tempObj = {};
        tempObj['hours'] = value;
        this.setState(tempObj);
    }
    handleMinuteChange(value){
        var tempObj = {};
        tempObj['minutes'] = value;
        this.setState(tempObj);
    }
    handleSecondChange(value){
        var tempObj = {};
        tempObj['seconds'] = value;
        this.setState(tempObj);
    }
    resetTime(){
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0
        });
        this.sendTime();
    }
}

export default Time;
