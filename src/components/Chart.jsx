import React from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';

export const Chart = ({ data }) => {
    return (
        <LineChart width={800} height={600} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            {/* {
                data.instr == 'Газпром' ? (<Line type="monotone" dataKey="price" stroke="#8884d8" />) : <div>oops</div>
            } */}
            
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
    )
}
