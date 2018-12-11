import React, { Component } from 'react';
import './App.css';

import Form from './components/form';
import Header from './components/header';

const API_KEY = 'f499c3e4b8e011266046427d8f2090c5';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const url = `${corsAnywhere}https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const apiCall = await fetch(url);
    const data = await apiCall.json();
    this.setState({recipes: data});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
