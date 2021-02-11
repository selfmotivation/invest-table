import React from 'react'
import css from './Table.module.css'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

export const Table = ({data}) => {
    
    // console.log(data);
    return (
        <table className={css.table}>
            <TableHeader />
            <TableBody data={data} />   
        </table>
    )
}
