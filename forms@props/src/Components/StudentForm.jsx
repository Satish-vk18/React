import {FormData} from "../FormData"
import "../App.css"

const StudentForm = () => {
    const {studentForm} = FormData;
    return (
        <>
        <form>
            {studentForm.fields.map((field,index)=>{
                return (
                    <>
                    <label >{studentForm.lables[index]}</label>
                    <input type={field.type} placeholder={field.placeholder} name={field.name} id={field.id} /><br />
                    </>
                )
            })}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default StudentForm