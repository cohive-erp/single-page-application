import React, { useState } from 'react'
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
import { ProdutoResult } from '../../lib/types/ProdutoResult.ts'

type ProductTableProps = {
  tableResult: ProdutoResult[]
  handleOpenNovoProduto: () => void
  handleOpenRelatorio: () => void
  handleOpenEditarProduto: () => void
  handleOpenDeletar: () => void
}

function ProductTable(props: ProductTableProps) {
  const { tableResult, handleOpenNovoProduto, handleOpenRelatorio, handleOpenEditarProduto, handleOpenDeletar } = props
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', borderRadius: '0.75%' }}>
      <div className='flex justify-between w-full p-4 mb-6'>
        <Paragraph size='h1'>📦 Produtos</Paragraph>
        <div className='flex flex-row gap-4 w-[70%] justify-end'>
          <Button content='Novo produto' className='w-[35%]' onClick={handleOpenNovoProduto} />

          {tableResult.length > 0 ? (
            <>
              <Button content='Obter dados' className='w-[35%]' onClick={handleOpenRelatorio} />
              <Search className='w-[30%]' />
            </>
          ) : (
            <>
              <Button content='Obter dados' className='w-[35%] btn-disabled' />
              <Search className='w-[30%] input-disabled' />
            </>
          )}

          {false && <LoadingButton content='Gerando...' className='w-[35%]' />}
        </div>
      </div>
      <TableContainer>
        <Table stickyHeader>
          <ProductTableHead />
          <TableBody>
            {tableResult.length > 0 && tableResult.map((row) => (
              <TableRow
                key={row.idProduto}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row' align='right'>
                  <Paragraph size='h4'>{row.idProduto}.</Paragraph>
                </TableCell>
                <TableCell component='th' scope='row'>
                  {row.nome.length < 50 ? row.nome : row.nome.slice(0, 49) + '...'}
                </TableCell>
                <TableCell align='right'>
                  {row.categoria}
                </TableCell>
                <TableCell align='right'>
                  {row.precoVenda.toFixed(2).replace('.', ',')}
                </TableCell>
                <TableCell align='right'>
                  {row.quantidade}
                </TableCell>
                <TableCell sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }} align='right'>
                  <Button content='Apagar' color='secondary' onClick={handleOpenDeletar} />
                  <Button content='Editar' onClick={handleOpenEditarProduto} />
                </TableCell>
              </TableRow>
            ))}

            {tableResult.length < 5 && <div className='flex justify-center items-center my-32'></div>}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={tableResult.length}
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
