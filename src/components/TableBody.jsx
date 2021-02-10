import React from 'react'
import { TableRow } from './TableRow'

export const TableBody = (props) => {
    return (
        <tbody>
            {props.data.map(row => {
                return <TableRow row={row}></TableRow>
            })}
        </tbody>
    )
}
