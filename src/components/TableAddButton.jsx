import React from 'react'
import css from './Table.module.css'
import { TableBody } from './TableBody'

export const TableAddButton = (props) => {
    const addRow = () => {
        const emptyRow = { date: '', instr: '', price: undefined };
        // console.log(setData);
        props.data.data.push(emptyRow);
        console.log(props.data.data);
        props.data.setData(props.data.data);
        // return <TableBody data={props.data.data} />
    }

    return (
        <button className={css.table__button} onClick={addRow}></button>
    )
}
