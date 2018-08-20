import React, { Component } from 'react';

const BASE_URL = 'https://minesweeper-api.herokuapp.com'
class Minesweeper extends Component {
    constructor(props) {
        super(props);
        this.state = {
        game: {
            board: [],
            gameId: '',
            difficulty: 0,
            }
        }
    }

    componentDidMount() {
        fetch(`${BASE_URL}/games/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              body: JSON.stringify({ difficulty: 0 })
        }).then(resp => resp.json())
        .then(newGame => {
            console.log("game", newGame,);
            this.setState({
                game: newGame,
                gameId: newGame.id
            })
        })
    }

    renderCells = (row, column) => {
        if (this.state.game.board[row][column] === "_") {
            return "◻️"
        }
        else if (this.state.game.board[row][column] === "F") {
            return "🚩"
        }
        else if (this.state.game.board[row][column] === "*") {
            return "💣"
        }
        else {
            return this.state.game.board[row][column]
        }
    }

    selectedSquare = (row, column) => {
        fetch(`${BASE_URL}/games/${this.state.gameId}/check`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              body: JSON.stringify({ 
                  "row": row, 
                  "col": column
              })
        })
        .then(resp => resp.json())
        .then(newGame => {
            console.log("game", newGame,);
            this.setState({
                game: newGame,
            })
            if (this.state.game.state === "lost") {
                // console.log('Loser')
            } 
            else if (this.state.game.state === "won") {
                // console.log('Winner')
            }
        })
    }

    flaggedSquare = (e , row, column) => {
        e.preventDefault()
        fetch(`${BASE_URL}/games/${this.state.gameId}/flag`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "row": row,
                "col": column
            })
        })
        .then(resp => resp.json())
        .then(newGame => {
            this.setState({
                game: newGame
            })
        })
    }
    
    render() {
        return (
            <div className="intro">
               <span className="intro_game">{this.state.game.state}:
               </span>   {this.state.game.id}
               <section className="game_difficulty_option">
                <select>
                    <option value="0">Beginner</option>
                    <option value="1">Intermediate</option>
                    <option value="2">Expert</option>
                 </select>
                </section>
               {this.state.game.board.map((row, i)  => {
                   return (
                       <div  key={i} className="square_container">
                           {row.map((col, j) => {
                            return <span key={j} className="squares" 
                            onClick={() => this.selectedSquare(i, j)}
                            onContextMenu={(e) => this.flaggedSquare(e, i, j)}>
                            {this.state.game.board[i][j]} 
                            </span>
                           })}
                       </div>
                   )
               })} 
            </div>
        );
    }
}
export default Minesweeper;




