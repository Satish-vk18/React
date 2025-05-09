import { Component } from "react";

class TypedValue extends Component{
    constructor(){
        super()
        this.state ={
            text : "",
        }
    }
    handleChange = (event) => {
        // console.log(event)
        this.setState({text: event.target.value })
    }
    render(){
        return <>
            <h3>Typed Value : {this.state.text}</h3>
            <input type="text" placeholder="Type something..." onChange={this.handleChange} />
        </>
    }
}
export default TypedValue;