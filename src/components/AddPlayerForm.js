import React from 'react';

class AddPlayerForm extends React.Component{

state={
  value:''
};

 handleValueChange=(e)=>{
 this.setState({value:e.target.value});
 }

handleSubmit=(e)=>{
   e.preventDefault();
   this.props.addPlayer(this.state.value);
   this.setState({
     value:''
   });
 }


render(){
return(
    <form onSubmit={this.handleSubmit}>
<input type="text"
 placeholder="Enter a player's name"
 value={this.state.value}
 onChange={this.handleValueChange}
 />
<input type="submit" value="Add Player" />
   </form>

  );
 }
}

export default AddPlayerForm;

//onChange listens to when a user use input field
//onSubmit handles when the form is submitted
//event object provide target property which points for input element
//this.setState({object:value})

//need to call prevent default or everytime the browser reloads and the infos will gone

//after submitting set the state to empty string
