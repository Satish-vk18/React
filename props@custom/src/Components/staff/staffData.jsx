import Heading from "../../Custom/Header"
import Search from "../../Custom/search"
import Table from "../../Custom/Table"
import { StaffData } from "../../Data/staffData"

function Staff () {
    const headings = Object.keys(StaffData[0])
    return (
        <>
        < Heading heading = "Staffs Management"/>
        < Search type="search" placeholder ="search staff by eamil or name"/>
        <Table headings = {headings} dataSource = {StaffData}/>
        </>
    )
}

export default Staff