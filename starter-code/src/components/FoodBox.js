import React, { Component } from "react";

export default class FoodBox extends Component {
  state = {
    quantity: 0
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" min="0" defaultValue={this.props.quantity} type="number" onChange={(e) => {this.setState({quantity:e.target.value})}} />
              </div>
              <div className="control">
                <button onClick={() => {this.props.addToList({ ...this.props, ...this.state,})}} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}