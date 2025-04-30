import Heading from "../../Custom/Header"
import Search from "../../Custom/search"
import Table from "../../Custom/Table"
import { SubjectsData } from "../../Data/subjectsData"

function Subjects () {
    const headings = Object.keys(SubjectsData[0])
    return (
        <>
        < Heading heading= "Subjects Management"/>
        < Search type="search" placeholder ="search subject by name"/>
        <Table headings = {headings} dataSource = {SubjectsData}/>
        </>
    )
}

export default Subjects