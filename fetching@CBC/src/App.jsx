import { Component } from "react"
import "./App.css"

class App extends Component{
  constructor(){
    super()
    this.state = {
      count : 0,
      data : []
    }
    console.log("constructor")
  }

  fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    this.setState({data : data})
  }
  componentDidMount(){
    console.log("componentDid Mount")
    this.fetchData()
  }
  render(){
    console.log("render")
    const divstyles = {
      border : "1",
      borderColor : "red",
      borderStyle : "solid",
    }
    return (
      <>
        {this.state.data.length > 0 ? (
            <>
              {this.state.data.map((product,index)=>{
                console.log(product)
                return (
                  <>
                    <div style={divstyles}>
                        <p>{product.id}</p>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>{product.category}</p>
                        <p>{product.rating.rate}</p>
                        <img src={product.image} alt="image" width={200} height={300} />
                      </div>
                  </>
                )
              })}
            </>

        ) : (

          <>
          <p>No data Found</p>
          </>
        )}
      </>
    )
  }
}

export default App