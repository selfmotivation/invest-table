import React from 'react'
import css from './Table.module.css'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

export const Table = (props) => {
    

    return (
        <table className={css.table}>
            <TableHeader></TableHeader>
            <TableBody data={props.data}></TableBody>            
        </table>
    )
}
