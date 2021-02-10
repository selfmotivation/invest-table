import React from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
// import Table from './Table';

export const Chart = () => {
    const data = [
        {date: '01.01.2019', instr: 'Газпром', price: 2000},
        {date: '01.01.2019', instr: 'Автоваз', price: 2500},
        {date: '05.01.2019', instr: 'Сбербанк', price: 10000},
        {date: '10.01.2019', instr: 'Газпром', price: 2500},
        {date: '07.10.2019', instr: 'Автоваз', price: 2100},
    ]
    return (
        // <LineChart width={800} height={600} data={data2}></LineChart>
        <LineChart width={800} height={600} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            {/* <Line type="monotone" dataKey="pv" stroke="#82ca9d" /> */}
        </LineChart>
    )
}
