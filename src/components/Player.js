import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Icon from './Icon';

class Player extends React.PureComponent{

static propTypes={
 id: PropTypes.number,
 index: PropTypes.number,
 score: PropTypes.number.isRequired,
 name: PropTypes.string.isRequired,
 changeScore: PropTypes.func,
 removePlayer: PropTypes.func

}

  render(){
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() =>this.props.removePlayer(this.props.id)}>✖</button>
            <Icon isHighScore={this.props.isHighScore} />
          { this.props.name }
        </span>

        <Counter
         score={this.props.score}
        changeScore={this.props.changeScore}
        index={this.props.index}
         />
      </div>
    );
  }
}


export default Player ;

//PureComponet run shouldComponentUpdate that compares props and state
//it prevents uncessary rerendering of props
