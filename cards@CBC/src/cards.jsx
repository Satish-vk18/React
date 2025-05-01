import { Component } from "react";
import "../src/App.css"

class Cards extends Component{
    divStyles = {
        border : "1",
        borderColor : "red",
        borderStyle : "solid",
        margin : "20px",
    }
    render(){
        // console.log(this.props)
        return (
            <>
            {this.props.products.products.length > 0 ? (
                <>
                    {this.props.products.products.map((product,index)=>{
                    return (
                        <>
                        <div style={this.divStyles}>
                            <p><strong>Id :</strong>{product.id}</p>
                            <p><strong>Title :</strong>{product.title}</p>
                            <p><strong>Description :</strong>{product.description}</p>
                            <p><strong>Category :</strong>{product.category}</p>
                            <p><strong>Price :</strong>{product.price}</p>
                            <p><strong>Rate : </strong>{product.rating.rate}</p>
                            <img src={product.image} alt="image" width={200} height={200} />

                        </div>
                        </>
                    )
                    })}
                </>
            ):(
                <>
                <p>No Data Avilable</p>
                </>
            )}
            </>
        )
    }
}

export default Cards