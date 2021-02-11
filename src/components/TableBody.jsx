import React from 'react'
import { TableRow } from './TableRow'

export const TableBody = ({data}) => {
    
    return (
        <tbody>
            {
                data.map((row, index) => {
                    return <TableRow row={row} key={index} />
                })
                
            }
        </tbody>
    )
}
