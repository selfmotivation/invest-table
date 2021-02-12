import { useState } from 'react';
import './App.css';
import { Chart } from './components/Chart';
import { Table } from './components/Table';
import { TableAddButton } from './components/TableAddButton';
import DataContext from './components/DataContext';

function App() {
  let [data, setData] = useState(
    [
      { date: '01.01.2019', instr: 'Газпром', price: 2000 },
      { date: '01.01.2019', instr: 'Автоваз', price: 2500 },
      { date: '05.01.2019', instr: 'Сбербанк', price: 10000 },
      { date: '10.01.2019', instr: 'Газпром', price: 2500 },
      { date: '07.10.2019', instr: 'Автоваз', price: 2100 },
      { date: '14.12.2019', instr: 'Ведро', price: 6600 },
      { date: '', instr: '', price: '' },
    ]
  )

  return (
    <DataContext.Provider value={{data}}>
      <div className="App">
        <Table data={{ data, setData }} className="table"></Table>
        <TableAddButton className="button" data={{ data, setData }}></TableAddButton>
        <input></input>
        <Chart data={data} className="chart"></Chart>
      </div>
    </DataContext.Provider>
  );
}

export default App;
