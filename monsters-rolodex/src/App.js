import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ monsters: data });
      });
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters..."
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
