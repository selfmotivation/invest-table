import React from 'react'
import css from './Table.module.css'

export const TableRow = (props) => {
    return (
        <td className={css.table__data} contentEditable>{props.data[0].date}</td>
    )
}
