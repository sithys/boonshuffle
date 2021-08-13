import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
}

class BlueSquare extends React.Component {
    render() {
      return (
        <button className="blue-square">
          {/* TODO */}
        </button>
      );
    }
}

class Board extends React.Component {
    renderSquare(b) {
        if(b) {
            return <BlueSquare />;
        }
        else {
            return <Square />;
        }
    }

    render() {
      const status = 'Next player: X';

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(true)}
            {this.renderSquare(false)}
            {this.renderSquare(true)}
          </div>
          <div className="board-row">
            {this.renderSquare(false)}
            {this.renderSquare(false)}
            {this.renderSquare(false)}
          </div>
          <div className="board-row">
            {this.renderSquare(true)}
            {this.renderSquare(false)}
            {this.renderSquare(true)}
          </div>
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