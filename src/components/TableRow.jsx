import React from 'react'
import css from './Table.module.css'

export const TableRow = ({ row }) => {
    return (
        <tr className={css.table__row}>
            <td className={css.table__data} contentEditable>{row.date}</td>
            <td className={css.table__data} contentEditable>{row.instr}</td>
            <td className={css.table__data} contentEditable>{row.price}</td>
        </tr>
    )
}
