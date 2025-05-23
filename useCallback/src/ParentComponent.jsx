import { useCallback, useState } from "react";
import { ChildComponent } from "./ChildComponent";

const ParentComponent = () => {
    const [count , setCount] = useState(0);
        const handleClick = useCallback(()=>{
        setCount((count) => count  + 1);
    },[])
    return (
        <>
            <h1> Count : {count}</h1>
            <ChildComponent handleClick = {handleClick}/>
        </>
    )
}
export default ParentComponent;