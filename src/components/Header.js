import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
     <Stats/>
      <h1>{ props.title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes={
players: PropTypes.arrayOf(PropTypes.object),
title: PropTypes.string
}

Header.defaultProps={
  title:'My Scoreboard'
}

export default Header;
