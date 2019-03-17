import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !robots.length ?
             <h1>Loading....</h1> :
         (
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
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
    
                                            
}

export default App;