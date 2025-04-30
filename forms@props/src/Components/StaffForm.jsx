import {FormData} from "../FormData"
import "../App.css"

const StaffForm = () => {
    const {staffForm} = FormData;
    return (
        <>
        <form>
            {staffForm.fields.map((field,index)=>{
                return (
                    <>
                    <label >{staffForm.lables[index]}</label>
                    <input type={field.type} placeholder={field.placeholder} name={field.name} id={field.id} /><br />
                    </>
                )
            })}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default StaffForm