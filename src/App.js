import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div>
                <h1 style={{
                        textAlign: 'center',
                        borderWidth: '5px',
                        borderStyle: 'solid',
                        borderRadius: '10px',
                        background: 'rgba(120, 228, 255, 0.644)',
                        margin: '10px',
                        marginTop: '30px'
                        }}>
                    Robo Search
                </h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
        );
    }
}

export default App;