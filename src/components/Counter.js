import React from 'react';

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }
    increment=()=>{
        this.setState({
            counter:this.state.counter +1
        })

    }
    decrement=()=>{
        this.setState({
            counter:this.state.counter -1
        })

    }

    render(){
        return(
            <div>
                <h3>Counter : {this.state.counter}</h3>
                <p><button onClick={this.increment}>Incremenet</button></p>
                <p><button onClick={this.decrement}>Decremenet</button></p>
            </div>
        )
    }
}
export default Counter;