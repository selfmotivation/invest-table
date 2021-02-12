import React from 'react'
import { TableRow } from './TableRow'

export const TableBody = (props) => {
    
    return (
        <tbody>
            {
                props.data.data.map((row, idx) => {
                    return <TableRow data={props.data} row={row} key={idx} idx={idx} />
                })
                
            }
        </tbody>
    )
}
