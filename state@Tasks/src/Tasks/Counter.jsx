import { Component } from "react";
import "../App.css"

class Counter extends Component{
    constructor(){
        super()
        this.state ={
            count : 0,
        }
    }
    handleIncrement = () =>{
        if(this.state.count < 20){
            this.setState({count : this.state.count + 1})
        }
    }
    handleDecrement = () =>{
        if(this.state.count > 0){
            this.setState({count : this.state.count - 1})
        }
    }
    // componentDidMount (){
    //     {this.setState({count : this.state.count + 1})}
    // }
    handleReset = () =>{
        this.setState({count : 0})
    }
    render(){
        return(
            <>
                <div>
                    <h2>Count : {this.state.count}</h2>
                </div>
                <div>
                    <button disabled = {this.state.count > 20} onClick = {this.handleIncrement}>+</button>
                    <button disabled = {this.state.count == 0} onClick = {this.handleReset}>⟳</button>
                    <button disabled = {this.state.count <= 0} onClick = {this.handleDecrement}>-</button>
                </div>
            </>
        )
    }
}

export default Counter