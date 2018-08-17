import React, { Component } from 'react';

const BASE_URL = 'https://minesweeper-api.herokuapp.com/games'

class Minesweeper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {
                board: []
            }
        }
    }

    componentDidMount() {
        fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify({ difficulty: 0})
        }).then(resp => resp.json())
        .then(newGame => {
            console.log("game", newGame);
            this.setState({
                game: newGame
            })
        })
    }

    render() {
        return (
            <div>
               currently playing    {this.state.game.id}

               {this.state.game.board.map((row, i) => {
                   console.log("row", row, i)
                   return (
                       <div>
                           {row.map((col, j) => {
                               return <span className="squares">
                                {this.state.game.board [i][j]}
                                is at
                               {`${i}, ${j}`} 
                               </span>
                           })}
                       </div>
                   )
                   return
               })} 
            </div>
        );
    }
}

export default Minesweeper;
