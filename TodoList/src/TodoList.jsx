import { useState } from "react"
import './index.css'
import NotFoundImage from './assets/notFoundImage.webp'

function TodoList(){
    const [tasks , setTasks] = useState(["Weak up","Get shower","prepare lunch"])
    const [newTask,setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addNewTask(){
        setTasks(t => [...t,newTask])
        setNewTask("")
    }


    function handleDelete(index){
        setTasks(t => t.filter((_,i) => i !==index))
    }


    function handleUp(index){
        if(index > 0){
            const upadatedTasks = [...tasks];
            [upadatedTasks[index] , upadatedTasks[index-1]] = 
            [upadatedTasks[index-1] , upadatedTasks[index]]
            setTasks(upadatedTasks)
        }
    }


    function handleDown(index){
        if(index < tasks.length-1){
            const upadatedTasks = [...tasks];
            [upadatedTasks[index] , upadatedTasks[index+1]] = 
            [upadatedTasks[index+1] , upadatedTasks[index]]
            setTasks(upadatedTasks)
        }
    }


    return(
        <div className="To-do-list">
            <div className="todolist-title">
                <h1>
                    To do List
                </h1>
            </div>
            <div>
                <input type="text"
                        placeholder="Enter a Task..." 
                        onChange={handleInputChange}
                        className="input-field" 
                        value={newTask}
                        id="input"/>
                <button type="button" 
                        onClick={addNewTask}
                        className="add-button"
                         >
                        Add
                </button>
            </div>
            <div>
                <ul className="list-items">
                    {tasks.length>0 ? (
                        <>
                            {tasks.map((task,index)=> 
                            <li key={index} className="item">
                                <span className="text">{task}</span>
                                <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                                <button className="up-button" onClick={() => handleUp(index)}>Up</button>
                                <button className="down-button" onClick={() => handleDown(index)}>Down</button>
                            </li>
                    )}
                        </>
                    ) : (
                        <>
                            <img className="notFoundImage"src={NotFoundImage} alt="notFound-image" />
                        </>
                    ) }
                </ul>
            </div>
        </div>
    )
}
export default TodoList