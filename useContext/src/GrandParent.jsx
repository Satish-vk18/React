import { useContext } from "react";
import Parent from "./Parent";
import { ThemeContext } from "./App";
import Child from "./Child";

const GrandParent = ()=>{
    const {ThemeColor,arr} = useContext(ThemeContext)
    console.log(ThemeColor)
    console.log(arr)
    return(
        <>
            <h2>Grand Parent</h2>
            <p>{ThemeColor}</p>
            {
                arr.map((num,index)=>{
                    return(
                        <>
                            <p>Array [{index}] : {num}</p>
                        </>
                    )
                })
            }
            <button>I'm {ThemeColor} Button</button>
            <Parent/>
        </>
    )

}
export default GrandParent;

