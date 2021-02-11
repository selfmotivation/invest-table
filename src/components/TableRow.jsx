import React from 'react'
import css from './Table.module.css'

export const TableRow = ({ row }) => {
    const handler = (e) => {
        console.log(e.target);
        console.log(e.target.parentElement.attributes);
        console.log(row);
        console.log(row.key);
        
    }

    return (
        <tr className={css.table__row}>
            <td className={css.table__data} contentEditable onClick={handler}>{row.date}</td>
            <td className={css.table__data} contentEditable onClick={handler}>{row.instr}</td>
            <td className={css.table__data} contentEditable onBlur={handler}>{row.price}</td>
        </tr>
    )
}
