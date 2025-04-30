
function Table ({headings ,dataSource}){
    return (
        <>
        <table border={1} cellSpacing={0}>
            <thead>
                <tr>
                    {
                     headings.map((column,index)=>{
                        return (
                            <>
                            <th>{column[0].toUpperCase() + column.slice(1,)}</th>
                            </>
                        )
                     })
                    }
                </tr>
            </thead>
            <tbody>
                {dataSource.length > 0 ? (
                    <>
                    {dataSource.map((row,index)=>{
                        return (
                            <>
                            <tr>
                                {headings.map((cell,index)=>{
                                    return (
                                        <>
                                        <td>{row[cell]}</td>
                                        </>
                                    )
                                })}
                            </tr>
                            </>
                        )
                    })}
                    </>
                ):(
                    <>
                    <p>No Data Found</p>
                    </>
                )}
            </tbody>
        </table>
        </>

    )
}

export default Table