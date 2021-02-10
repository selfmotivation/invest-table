import React from 'react'
import css from './Table.module.css'

export const Table = () => {
    const data = [
        {date: '01.01.2019', instr: 'Газпром', price: 2000},
        {date: '01.01.2019', instr: 'Автоваз', price: 2500},
        {date: '05.01.2019', instr: 'Сбербанк', price: 10000},
        {date: '10.01.2019', instr: 'Газпром', price: 2500},
        {date: '07.10.2019', instr: 'Автоваз', price: 2100},
    ]

    return (
        <table className={css.table}>
            <tr className={css.table__row}>
                <th className={css.table__head}>Дата</th>
                <th className={css.table__head}>Инструмент</th>
                <th className={css.table__head}>Стоимость</th>
            </tr>
            <tr className={css.table__row}>
                <td className={css.table__data} contentEditable>{data[0].date}</td>
                <td className={css.table__data} contentEditable>{data[0].instr}</td>
                <td className={css.table__data} contentEditable>{data[0].price}</td>
            </tr>
            <tr className={css.table__row}>
                <td className={css.table__data} contentEditable>{data[1].date}</td>
                <td className={css.table__data} contentEditable>{data[1].instr}</td>
                <td className={css.table__data} contentEditable>{data[1].price}</td>
            </tr>
            <tr className={css.table__row}>
                <td className={css.table__data} contentEditable>{data[2].date}</td>
                <td className={css.table__data} contentEditable>{data[2].instr}</td>
                <td className={css.table__data} contentEditable>{data[2].price}</td>
            </tr>
            <tr className={css.table__row}>
                <td className={css.table__data} contentEditable>{data[3].date}</td>
                <td className={css.table__data} contentEditable>{data[3].instr}</td>
                <td className={css.table__data} contentEditable>{data[3].price}</td>
            </tr>
            <tr className={css.table__row}>
                <td className={css.table__data} contentEditable>{data[4].date}</td>
                <td className={css.table__data} contentEditable>{data[4].instr}</td>
                <td className={css.table__data} contentEditable>{data[4].price}</td>
            </tr>
            
        </table>
    )
}
