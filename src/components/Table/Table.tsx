import React from 'react'
import TableHead from './components/TableHead/TableHead.tsx'
import { TableResult } from '../../lib/types/TableResult.ts'
import Button from '../Button/Button.tsx'
import Paragraph from '../Paragraph/Paragraph.tsx'

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
          {tableResult.rows.length > 0 ? tableResult.rows.map((row) => (
            <tr>
              <th>{row.id}.</th>
              <td>{row.nome.length < 50 ? row.nome : row.nome.slice(0, 49) + '...'}</td>
              <td>{row.categoria}</td>
              <td>{row.valor.toFixed(2).replace('.', ',')}</td>
              <td className='text-center'>{row.quantidade}</td>
              <td className='flex justify-center items-center gap-2'>
                <Button content='Editar' onClick={() => console.log(row.id)} />
                <Button content='Apagar' onClick={() => console.log(row.id)} color='secondary' />
              </td>
            </tr>
          )) :
            <tr>
              <td></td>
              <td className='flex items-start justify-start'>
                <Paragraph size='h6'>Nenhum dado encontrado</Paragraph>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
