import Heading from "../../Custom/Header"
import Search from "../../Custom/search"
import Table from "../../Custom/Table"
import { StudentsData } from "../../Data/studentsData"

function Students () {
    const headings = Object.keys(StudentsData[0])
    return (
        <>
        < Heading heading = "Students Management"/>
        < Search type="search" placeholder ="search student by eamil or name"/>
        <Table headings = {headings} dataSource = {StudentsData}/>
        </>
    )
}

export default Students