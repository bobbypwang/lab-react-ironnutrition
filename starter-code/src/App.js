import React, { Component } from 'react';
import './App.css';

import completeFoodList from './foods.json';

import FoodBox from './FoodBox';
import Modal from './Modal';

class App extends Component {    
  
  constructor(props) {
    super(props);
    
    this.state = {
      foods :completeFoodList,
      modalState: false
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }


  render() {
    return (
      <div className="App">
        <section className="section">
        <div className="container">
          <h1 className="title is-1">Iron Nutrition</h1>
            {console.log(this.state.foods)}
            <FoodBox importFoodsProp = {this.state.foods} />
        </div>
        </section>
        <a id="add-food" className="button is-primary" onClick={this.toggleModal}>
              Add New Food
            </a>
            <Modal closeModal={this.toggleModal} modalState={this.state.modalState} importFoodsProp={this.state.foods} footitle="Add New Food Item" />
      </div>
    );
  }
}

export default App;
