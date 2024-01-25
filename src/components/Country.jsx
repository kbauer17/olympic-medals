import React, { Component} from "react";

class Country extends Component {
    state = { 
        name: 'United States',
        gold: 0,
     }

    render () {
        return ( 
            <div className="container-fluid">
                <div className="name">
                    {  this.state.name }
                </div>
                <div className="gold">
                    Gold medals:  {  this.state.gold }
                </div>
                
            </div>    
        )
    }
}
export default Country
