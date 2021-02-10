import React from 'react'
import css from './Table.module.css'

export const TableHeader = () => {

    return (
        <thead>
            <tr className={css.table__row}>
                <th className={css.table__head}>Дата</th>
                <th className={css.table__head}>Инструмент</th>
                <th className={css.table__head}>Стоимость</th>
            </tr>
        </thead>
    )
}
