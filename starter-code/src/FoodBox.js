import React, { Component } from 'react'

export default class FoodBox extends Component {

    state ={
    }

getFoodList = () => {
    let allFoodList = this.props.importFoodsProp.map((eachFood,i)=> {
        let pictureUrl = eachFood.image
        let name = eachFood.name
        let calories= eachFood.calories
        let quantity = eachFood.quantity

        return (
            <div className="box" key={i}>
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={pictureUrl} alt="" />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        value="1"
                    />
                    </div>
                    <div className="control">
                    <button className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
            </div>
        )
    })
    return allFoodList
}

    render() {
        return (
            <React.Fragment>
                {this.getFoodList()}
            </React.Fragment>
        )
    }
}
