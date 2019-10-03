import React, { Component } from 'react';
import '../stylesheets/addfood.css';

export default class AddFood extends Component {

    state = {
        name : "",
        calories : "",
        image : "https://i.imgur.com/LoG39wK.jpg",
        quantity: 0
    }
    
    inputUpdate = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addFoodItem = () => {
        this.props.addTheFoodToFoodBoxes(this.state)
        this.props.closeModal()
    }
    
    render() {

        if(!this.props.modalState) {
            return null;
          }

        return (
            <div className="modal is-active">
                <div className="modal-background" onClick={this.props.closeModal} />
                <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{this.props.title}</p>
                    <button className="delete" onClick={this.props.closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        <div className="field">
                            <form id="addFoodForm" onSubmit={this.addFoodItem}>
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Food Name" name="name" onChange={this.inputUpdate} />
                                </div>
                                <label className="label">Calories</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Food Calories" name="calories" onChange={this.inputUpdate} />
                                </div>
                                <label className="label">Image</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Image URL" name="image" onChange={this.inputUpdate} defaultValue="https://i.imgur.com/LoG39wK.jpg"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button form="addFoodForm" type="Submit" className="button" onClick={this.addFoodItem}>Submit</button>
                </footer>
                </div>
            </div>
            );
    }
  }