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

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Minesweeper;
