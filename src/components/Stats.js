import React from 'react' ;
import {Consumer}from './Context';

const Stats =()=>{
 return(
   <Consumer>
    {context =>{
         const totalPlayers= context.length;
         const totalScores= context.reduce((total,player)=>{
         return total+player.score;
      },0);

      return(
        <table className="stats">
       <tbody>
         <tr>
           <td>Players:</td>
           <td>{totalPlayers}</td>
         </tr>
         <tr>
           <td>Total Points:</td>
           <td>{totalScores}</td>
         </tr>
       </tbody>
     </table>
      );
    }}
   </Consumer>

 );
}

export default Stats ;
//when you areassiging avalur to already existing props no {}
//reduce(call back function including acumulator and num , initaial value of accumulator)
//reduce(accumulator , current value)
