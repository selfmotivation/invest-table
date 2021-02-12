import React from 'react'
import css from './Table.module.css'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

export const Table = (props) => {
    
    // console.log(data);
    return (
        <table className={css.table}>
            <TableHeader />
            <TableBody data={props.data} />   
        </table>
    )
}
