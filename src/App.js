import React, { Component } from 'react';
import './App.css';

import Form from './components/form';
import Header from './components/header';
import Recipes from './components/recipes';

const API_KEY = 'f499c3e4b8e011266046427d8f2090c5';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const count = '8';


class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const url = `${corsAnywhere}https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=${count}`;
    const apiCall = await fetch(url);
    const data = await apiCall.json();
    this.setState({recipes: data.recipes});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Form getRecipe={this.getRecipe}/>
          <Recipes recipes={this.state.recipes}/>
        </div>
      </div>
    );
  }
}

export default App;
