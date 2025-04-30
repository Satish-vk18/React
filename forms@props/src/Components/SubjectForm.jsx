import {FormData} from "../FormData"
import "../App.css"

const SubjectForm = () => {
    const {subjectForm} = FormData;
    return (
        <>
        <form>
            {subjectForm.fields.map((field,index)=>{
                return (
                    <>
                    <label >{subjectForm.lables[index]}</label>
                    <input type={field.type} placeholder={field.placeholder} name={field.name} id={field.id} /><br />
                    </>
                )
            })}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default SubjectForm