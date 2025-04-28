import { Component } from "react";

class Card extends Component{
    render(){
        const arr = [
            {
                id:1,
                name : "product 1",
            },
            {
                id:2,
                name : "product 2",
            },
            {
                id:3,
                name : "product 3",
            },
            {
                id:4,
                name : "product 4",
            },
        ];
        return <>
        {arr.length > 0 ? (

            <>
            {arr.map((obj,index)=>{
                    
            })}
            </>
        ):(

            <>
            <p>no data</p>
            </>
        )}
        
        </>
    }
}


export default Card