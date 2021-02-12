import React from 'react'
import { Chart } from './Chart'

import css from './Table.module.css'
import { TableBody } from './TableBody'
// import { Chart } from './Chart'

export const TableAddButton = (props) => {
    const addRow = () => {
        const emptyRow = { date: '11.11.2020', instr: 'vedro', price: 15000 };
        // console.log(setData);
        props.data.data.push(emptyRow);
        console.log(props.data.data);
        // props.data.setData(props.data.data);
        // return <TableBody data={props.data.data} />
        
    }

    return (
        <button className={css.table__button} onClick={addRow}></button>
    )
}
