import React from 'react';

class Stopwatch extends React.Component{

   state={
     isRunning:false,
     elapsedTime:0,
     prevTime:0

   }

//when bottom is click, function is called and set prevtime to the time

   handleStopwatch=()=>{
    this.setState({
      isRunning: !this.state.isRunning
    });
    if(!this.state.isRunning){
      this.setState(
        { prevTime: Date.now() });
    }
   }

//and then count the time in 1/10 miliseconds
//setInterval receives a callback function

   componentDidMount(){
    this.intervalID=setInterval(()=>this.tick(),100);
   }

   componentWillUnmount(){
     clearInterval(this.intervalID);
   }

   tick=()=>{
     if(this.state.isRunning){
       const now = Date.now();
     this.setState({
       prevTime:now,
       elapsedTime:this.state.elapsedTime+(now - this.state.prevTime)
      });
     }
   }

   handleReset=()=>{
     this.setState({
       elapsedTime:0,
       isRunning:false
     })
   }

  render(){
    return(
  <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{Math.floor((this.state.elapsedTime)/1000)}</span>
      <button onClick={this.handleStopwatch}>
      {this.state.isRunning ? 'Stop' :'Start'}
      </button>
      <button onClick={this.handleReset}>Reset</button>
 </div>
    );
  }
}

export default Stopwatch;

//boolean value no need to assign =true

//use js bulid in clearInterval in componentWillUnmount()

//unmount for clearing net work requests,tearing down DOMs etc...
