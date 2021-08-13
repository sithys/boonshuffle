import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function all_false() {
   return new Array(
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
   );
}

function create_shuffle() {
   var units = create_units();

   for (var x in units) {
      var unit = units[x];
      var count = unit.count;

      var set = [];

      while (set.length < count) {
         var r = getRandomInt(11);
         if (set.indexOf(r) === -1) {
            set.push(r);
         }
      }

      for (var i in set) {
         var a = set[i];
         unit.boons[a] = true;
      }
   }

   return units;
}

function create_units() {
   return new Array(
      {
         character: "Byleth",
         boons: all_false(),
         count: 4
      },
      {
         character: "Edelgard",
         boons: all_false(),
         count: 5
      },
      {
         character: "Hubert",
         boons: all_false(),
         count: 4
      },
      {
         character: "Dorothea",
         boons: all_false(),
         count: 3
      },
      {
         character: "Ferdinand",
         boons: all_false(),
         count: 5
      },
      {
         character: "Bernadetta",
         boons: all_false(),
         count: 3
      },
      {
         character: "Caspar",
         boons: all_false(),
         count: 2
      },
      {
         character: "Linhardt",
         boons: all_false(),
         count: 2
      },
      {
         character: "Petra",
         boons: all_false(),
         count: 4
      },
      {
         character: "Dimitri",
         boons: all_false(),
         count: 4
      },
      {
         character: "Dedue",
         boons: all_false(),
         count: 4
      },
      {
         character: "Felix",
         boons: all_false(),
         count: 4
      },
      {
         character: "Mercedes",
         boons: all_false(),
         count: 3
      },
      {
         character: "Ashe",
         boons: all_false(),
         count: 3
      },
      {
         character: "Annette",
         boons: all_false(),
         count: 3
      },
      {
         character: "Sylvain",
         boons: all_false(),
         count: 4
      },
      {
         character: "Ingrid",
         boons: all_false(),
         count: 4
      },
      {
         character: "Claude",
         boons: all_false(),
         count: 5
      },
      {
         character: "Lorenz",
         boons: all_false(),
         count: 3
      },
      {
         character: "Hilda",
         boons: all_false(),
         count: 3
      },
      {
         character: "Raphael",
         boons: all_false(),
         count: 3
      },
      {
         character: "Lysithea",
         boons: all_false(),
         count: 4
      },
      {
         character: "Ignatz",
         boons: all_false(),
         count: 4
      },
      {
         character: "Marianne",
         boons: all_false(),
         count: 5
      },
      {
         character: "Leonie",
         boons: all_false(),
         count: 3
      },
      {
         character: "Manuela",
         boons: all_false(),
         count: 3
      },
      {
         character: "Hanneman",
         boons: all_false(),
         count: 3
      },
      {
         character: "Seteth",
         boons: all_false(),
         count: 5
      },
      {
         character: "Flayn",
         boons: all_false(),
         count: 3
      },
      {
         character: "Cyril",
         boons: all_false(),
         count: 5
      },
      {
         character: "Catherine",
         boons: all_false(),
         count: 2
      },
      {
         character: "Alois",
         boons: all_false(),
         count: 3
      },
      {
         character: "Gilbert",
         boons: all_false(),
         count: 4
      },
      {
         character: "Shamir",
         boons: all_false(),
         count: 2
      },
      {
         character: "Yuri",
         boons: all_false(),
         count: 5
      },
      {
         character: "Balthus",
         boons: all_false(),
         count: 6
      },
      {
         character: "Constance",
         boons: all_false(),
         count: 5
      },
      {
         character: "Hapi",
         boons: all_false(),
         count: 4
      },
      {
         character: "Jeritza",
         boons: all_false(),
         count: 5
      },
      {
         character: "Anna",
         boons: all_false(),
         count: 5
      }
   );
}

class CharSquare extends React.Component {
   render() {
      return (
         <td className="char-square">
            {this.props.name}
         </td>
      );
   }
}

class Square extends React.Component {
   render() {
      return (
         <td className="square">
            No Boon
         </td>
      );
   }
}

class BlueSquare extends React.Component {
   render() {
      return (
         <td className="blue-square">
            Boon!
         </td>
      );
   }
}

class CharRow extends React.Component {
   renderSquare(entry, index) {
      if (entry.boons[index]) {
         return <BlueSquare />;
      }
      else {
         return <Square />;
      }
   }

   renderHeader(entry) {
      return <CharSquare name={entry.character} />
   }

   render() {
      var unit = this.props.unit;

      return (
         <tr>
            {this.renderHeader(unit)}
            {this.renderSquare(unit, 0)}
            {this.renderSquare(unit, 1)}
            {this.renderSquare(unit, 2)}
            {this.renderSquare(unit, 3)}
            {this.renderSquare(unit, 4)}
            {this.renderSquare(unit, 5)}
            {this.renderSquare(unit, 6)}
            {this.renderSquare(unit, 7)}
            {this.renderSquare(unit, 8)}
            {this.renderSquare(unit, 9)}
            {this.renderSquare(unit, 10)}
         </tr>
      )
   }
}

class Board extends React.Component {
   render() {
      var shuffle = create_shuffle();

      return (
         <div>
            <table>
               <tr>
                  <th>Character</th>
                  <th>Sword</th>
                  <th>Lance</th>
                  <th>Axe</th>
                  <th>Bow</th>
                  <th>Brawling</th>
                  <th>Reason</th>
                  <th>Faith</th>
                  <th>Authority</th>
                  <th>Heavy Armor</th>
                  <th>Riding</th>
                  <th>Flying</th>
               </tr>
               {
                  shuffle.map((u) =>
                     <CharRow unit={u} />
                  )
               }
            </table>
         </div>
      );
   }
}

class Game extends React.Component {
   render() {
      return (
         <div className="game">
            <div className="game-board">
               <Board />
            </div>
            <div className="game-info">
               <div>{/* status */}</div>
               <ol>{/* TODO */}</ol>
            </div>
         </div>
      );
   }
}

// ========================================

ReactDOM.render(
   <Game />,
   document.getElementById('root')
);