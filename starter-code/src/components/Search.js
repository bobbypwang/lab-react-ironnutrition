import React, { Component } from 'react'
import '../stylesheets/search.css';

export default class Search extends Component {

    searchTerm = (e) => {
        console.log(e.target.value)
        let searchFoods = this.props.allFoodsListProp.filter(food => {
            return food.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        this.props.allFoodsList(searchFoods)
    }

    render() {
        return (
            <React.Fragment>
                <input className="input search" type="text" placeholder="Search for foods" onChange={this.searchTerm} />
            </React.Fragment>
        )
    }
}
