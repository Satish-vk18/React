import { Component } from "react"
import Counter from "./Tasks/Counter"
import TypedValue from "./Tasks/TypedValue"
import ShowTypedColor from "./Tasks/ShowTypedColor"
import NamesWithColors from "./Tasks/NamesWithColors"
import CreateAndReadInput from "./Tasks/CreateAndReadInput"


class App extends Component{
  render(){
    return <>
        <Counter/>
        <TypedValue/>
        <ShowTypedColor/>
        <NamesWithColors/>
        <CreateAndReadInput/>
    </>

  }
}
export default App