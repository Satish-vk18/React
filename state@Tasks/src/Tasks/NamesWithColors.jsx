import { Component } from "react";

class NamesWithColors extends Component{
    constructor (){
        super()
        this.state = {
            names : ["ravi","raju","ramu","raghu"],
            colors : ["red","green","blue","orange"]
        }
    }
    render(){
        return(
            <>
                {this.state.names.map((name,index) => {
                    return (
                        <>
                            <p style={{color : this.state.colors[index]}}>{name}</p>
                        </>
                    )
                })}
            </>
        )
    }
}
export default NamesWithColors;