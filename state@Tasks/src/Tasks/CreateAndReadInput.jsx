import { Component } from "react";
import "../App.css"

class CreateAndReadInput extends Component{
    constructor(){
        super();
        this.state = {
            inputValue : "",
            list : [],
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({list : [...this.state.list , this.state.inputValue]})
    }
    handleChange = (event)=> {
        // console.log(event)
        this.setState({inputValue : event.target.value})
    }
    render(){
        // console.log(this.state.inputValue , this.state.list)
        // console.log(this.state.list)
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="type">Type : 
                        <input type="text" placeholder="type something" id="type" name="input value" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <table cellSpacing={0} border={1}>
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>Input Value</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                this.state.list.length > 0 ? (
                                    <>
                                        {
                                            this.state.list.map((data,index)=>{
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{data}</td>
                                                            <td>
                                                                <button>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                ) : (
                                    <>
                                    <tr>
                                        <td>No Data Avilable</td>
                                    </tr>
                                    </>
                                )
                            }
                    </tbody>
                </table>
            </>
        )
    }
}
export default CreateAndReadInput;