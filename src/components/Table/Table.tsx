import React from 'react'
import TableHead from './components/TableHead/TableHead.tsx'
import { TableResult } from '../../lib/types/TableResult.ts'
import Button from '../Button/Button.tsx'

type TableProps = {
  tableResult: TableResult
}

function Table(props: TableProps) {
  const { tableResult } = props

  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        <TableHead heads={tableResult.head} />
        <tbody>
          {tableResult.rows.map((row) => (
            <tr>
              <th>{row.id}</th>
              <td>{row.nome}</td>
              <td>{row.categoria}</td>
              <td>{row.valor.toFixed(2).replace('.', ',')}</td>
              <td>{row.quantidade}</td>
              <td className='flex gap-2'>
                <Button content='Editar' onClick={() => console.log(row.id)} />
                <Button content='Apagar' onClick={() => console.log(row.id)} color='secondary' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
