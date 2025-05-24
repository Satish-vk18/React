import { useContext } from "react";
import { ThemeContext } from "./App";


const Child = ()=>{
        const theme = useContext(ThemeContext)
    return(
        <>
            <h2>Child</h2>
            <p>{theme.ThemeColor}</p>
            <p>{theme.inputName}</p>
        </>
    )

}
export default Child;