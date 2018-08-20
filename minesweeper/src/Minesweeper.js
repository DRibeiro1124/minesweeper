import React, { Component } from 'react';

const BASE_URL = 'https://minesweeper-api.herokuapp.com/games'

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
        fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
        }).then(resp => resp.json())
        .then(newGame => {
            console.log("game", newGame,);
            this.setState({
                game: newGame
            })
        })
    }
            //Ask Mark about this... cant' figure it out
    // gameDifficulty() {
    //    fetch(BASE_URL, {
    //        method: "POST",s
    //        body: JSON.stringify({ difficulty: 0})
    //     }).then(resp => resp.json())
    //     .then(difficulty => {
    //         console.log("difficulty", newLevel);
    //         this.setState({
    //             difficulty: newLevel
    //         })
    //     })
    // }

    render() {
        return (
            <div className="intro">
               <span className="intro_game">currently playing:
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
                            return <span key={j} className="squares">
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




