import { Component } from "react";

class ShowTypedColor extends Component{
    constructor(){
        super()
        this.state ={
            color : "",
        }
    }
    handleColorChange = (event) => {
        // console.log(event)
        this.setState({color : event.target.value})
    }
    render(){
        return <>
            <div style={{backgroundColor : this.state.color , width : "100px", height : "100px"}}>

            </div>
            <input type="color" placeholder="type color name.." onChange={this.handleColorChange} />
        </>
    }
}
export default ShowTypedColor;