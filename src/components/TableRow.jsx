import React from 'react'
import css from './Table.module.css'
// import { TableCell } from './TableCell'

export const TableRow = (props) => {
    const handler = (e) => {
        const columnName = e.target.attributes.cellName.value;
        const prevCellValue = props.row[columnName].toString();
        const currentCellValue = e.target.textContent;
        let defaultDataValue = props.data.data[props.idx][columnName];

        console.log(columnName);

        if (prevCellValue !== currentCellValue) {
            props.data.data[props.idx][columnName] = +currentCellValue;
            console.log(props.data.data[props.idx][columnName]);
            console.log(props.data.data);

        }
        
    }

    return (
        
        <tr className={css.table__row} idx={props.idx}>
            <td className={css.table__data} contentEditable onBlur={handler} idx={`${props.idx}0`} cellName='date'>{props.row.date}</td>
            <td className={css.table__data} contentEditable onBlur={handler} idx={`${props.idx}1`} cellName='instr'>{props.row.instr}</td>
            <td className={css.table__data} contentEditable onBlur={handler} idx={`${props.idx}2`} cellName='price'>{props.row.price}</td>
        </tr>
    )
}
