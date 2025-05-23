import { memo } from "react"

export const ChildComponent = memo(({handleClick})=>{

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
})