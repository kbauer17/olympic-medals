import React, { Component} from "react";

class Country extends Component {
    state = { 
        name: 'United States',
        gold: 0,
     }

    handleIncrement = () => {
        this.setState({ gold: this.state.gold + 1 })
    };

    handleDecrement = () => {
        if (this.state.gold <= 0){
            this.setState({gold: 0})
        } else{
            this.setState({ gold: this.state.gold - 1 })
        }
    };

    render () {
        return ( 
            <div className="container-fluid">
                <div className="name">{  this.state.name }</div>
                <div className="gold">Gold medals:  {  this.state.gold }
                <div className="btn-group px-3" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary btn-sm" onClick={this.handleIncrement}>+</button>
                        <button type="button" className="btn btn-primary btn-sm" onClick={this.handleDecrement}>-</button>
                    </div>
                </div>
                
                
            </div>    
        )
    }
}
export default Country
