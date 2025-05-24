import Child from "./Child";
import { useContext } from "react";
import { ThemeContext } from "./App";


const Parent = ()=>{
        // const theme = useContext(ThemeContext)
    return(
        <>
            <h2>Parent</h2>
            {/* <p>{theme.ThemeColor}</p>
            <p>{theme.inputName}</p> */}
            <Child/>
        </>
    )

}
export default Parent;