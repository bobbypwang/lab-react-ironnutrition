import React, { Component } from 'react';
import './stylesheets/app.css';

import completeFoodList from './foods.json';

import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

class App extends Component {    
  
  constructor(props) {
    super(props);
    
    this.state = {
      foods : completeFoodList,
      showFoods : completeFoodList,
      foodList : {},
      show : false,
      modalState : false,
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  showFoodBoxes = () => { //show all the foods 
    return this.state.showFoods.map((eachFood,i) =>{
      return <FoodBox key={i} {...eachFood} addToList={this.addToList} />// name={eachFood.name} calories={eachFood.calories}
    })
  }

  addTheFoodToFoodBoxes = (food) => { 
    let newShowFoods = [...this.state.showFoods] //copy foods 
    newShowFoods.unshift(food) //add food to the beginning 
    this.setState({  //add new foods 
      showFoods:newShowFoods,
      allFoods: newShowFoods,
      show: false
    })
    
  }

  callbackFunction = (newFood) => {
    this.setState({foods:newFood})
  }


  render() {
    return (
      <div className="App">
        <section className="section">
        <div className="container">
          <h1 className="title is-1">Iron Nutrition</h1>
            {console.log(this.state.foods)}
            {console.log(this.state.showFoods)}
            <Search allFoodsList={this.callbackFunction} allFoodsListProp={this.state.foods} />
            {/* <FoodBox importFoodsProp = {this.state.foods} /> */}
            {this.showFoodBoxes()}
        </div>
        </section>
        <a id="add-food" className="button is-primary" onClick={this.toggleModal}>Add New Food</a>
        <AddFood 
          addTheFoodToFoodBoxes={this.addTheFoodToFoodBoxes} 
          closeModal={this.toggleModal} 
          modalState={this.state.modalState} 
          importFoodsProp={this.state.foods} 
          footitle="Add New Food Item" 
        />
      </div>
    );
  }
}

export default App;
