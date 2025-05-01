import { Component } from "react";
import Cards from "./cards";
import { products } from "../cards";

class App extends Component{
  products = {products}
  render(){
    return (
      <>
      <Cards products={this.products}/>
      </>
    )
  }
}

export default App