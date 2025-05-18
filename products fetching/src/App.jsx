import { useState } from "react"
import {products} from "../Data/data"
import "./App.css"

export default function displayProducts(){
  const [index , setIndex] = useState(0)
  const [showMore , setShowMore] = useState(false)
  const hasNext = index < products.length - 1;
  function handleNextChange (){
    if(hasNext){
      setIndex(index + 1)
    }else{
      setIndex(0)
    }
  }
  const product = products[index];
  function handleShowMoreChange (){
    setShowMore(!showMore)
  }
  return (
    <>
      <div className="card">
        <button onClick={handleNextChange}>
            Next
        </button>
        <h2>
          {index + 1} of {products.length}
        </h2>
        <div>
          <h2>{product.title}</h2>
          <h2>{product.category}</h2>
        </div>
        <button onClick={handleShowMoreChange}>
          {showMore ? "Show less" : "Show More"}
        </button>
        { showMore && <p> {product.description} </p>}
        <div>
          <img 
          src={product.image} 
          width={200}
          height={200}
          alt="image" />
        </div>
      </div>
    </>
  )
}