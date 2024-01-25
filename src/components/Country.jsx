import React, { Component} from "react";

class Country extends Component {
    state = { 
        name: 'United States',
        gold: 0,
     }

    render () {
        return ( 
            <div>
                {  this.state.name }
                {  this.state.gold }
            </div>    
        )
    }
}
export default Country
