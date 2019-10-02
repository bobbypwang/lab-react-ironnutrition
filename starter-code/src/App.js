import React, { Component } from 'react';
import './App.css';

import completeFoodList from './foods.json';

import FoodBox from './FoodBox';

class App extends Component {                                                                                 

  state = {
    foods :completeFoodList
  }



  render() {
    return (
      <div className="App">
        <section className="section">
        <div className="container">
          <h1 className="title is-1">Iron Nutrition</h1>
          
            {  console.log(this.state.foods)}
            <FoodBox importFoodsProp = {this.state.foods} />
        </div>
        </section>
      </div>
    );
  }
}

export default App;
