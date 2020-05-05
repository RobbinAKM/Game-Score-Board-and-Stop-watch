import React from 'react';
import {Provider} from './Context';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score:0
      },
      {
        name: "Treasure",
        id: 2,
        score:0
      },
      {
        name: "Ashley",
        id: 3,
        score:0
      },
      {
        name: "James",
        id: 4,
        score:0
      }
    ]
  };

  prevPlayerId=4;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index,delta) => {
   this.setState( prevState => ({
     score: prevState.players[index].score += delta
    }));
  }


  handleAddPlayer=(name)=>{
    this.setState(prevState=>{
      {
      players:[
        ...prevState.players,
        {
          name:name,
          score:0,
          id:this.prevPlayerId += 1,
        }
      ]
    }
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  render() {
    const highScore = this.getHighScore();
    return (
    <Provider value={this.state.players}>

      <div className="scoreboard">
        <Header/>
        {/* Players list */}
        {this.state.players.map( (player,index ) =>
          <Player
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
            index={index}
            isHighScore={highScore===player.score}
          />
        )}
        <AddPlayerForm  addPlayer={this.handleAddPlayer}/>
      </div>
  </Provider>
    );
  }
}

export default App;

//use spread syntax to bring in the copy of arrays

//for type checking use prop-types

//intermediatery variables should write outside of render(){}

//pureComponent canproduce perfomance boost

//static yourComponent {} let you call inside the class
