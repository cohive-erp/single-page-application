import React from 'react'
import { TableResult } from '../../lib/types/TableResult.ts'
import Button from '../Button/Button.tsx'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import ProductTableHead from './components/ProductTableHead/ProductTableHead.tsx'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Search from '../Search/Search.tsx'
import LoadingButton from '../Button/LoadingButton.tsx'

type ProductTableProps = {
  tableResult: TableResult
}

function ProductTable(props: ProductTableProps) {
  const { tableResult } = props
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div className='flex justify-between w-full px-4 mb-6'>
        <Paragraph size='h2'>📦 Produtos</Paragraph>
        <div className='flex flex-row gap-4 w-[70%] justify-end'>
          <Button content='Novo produto' className='w-[35%]' />

          {true && (
            <>
              <Button content='Obter dados' className='w-[35%]' />
              <Search className='w-[30%]' />
            </>
          )}

          {false && (
            <>
              <Button content='Obter dados' className='w-[35%] btn-disabled' />
              <Search className='w-[30%] input-disabled' />
            </>
          )}

          {false && <LoadingButton content='Gerando...' className='w-[35%]' />}
        </div>
      </div>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
          <ProductTableHead />
          <TableBody>
            {tableResult.rows.length > 0 && tableResult.rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row' align='right'>
                  <Paragraph size='h4'>{row.id}.</Paragraph>
                </TableCell>
                <TableCell component='th' scope='row'>
                  {row.nome.length < 50 ? row.nome : row.nome.slice(0, 49) + '...'}
                </TableCell>
                <TableCell align='right'>
                  {row.categoria}
                </TableCell>
                <TableCell align='right'>
                  {row.quantidade}
                </TableCell>
                <TableCell align='right'>
                  {row.valor.toFixed(2).replace('.', ',')}
                </TableCell>
                <TableCell sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }} align='right'>
                  <Button content='Apagar' color='secondary' />
                  <Button content='Editar' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={tableResult.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  )
}

export default ProductTable
