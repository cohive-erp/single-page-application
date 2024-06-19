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
import EditarProduto from '../Modal/EditarProduto/EditarProduto.tsx'
import deleteProduct from '../../lib/services/Delete/delete-product.ts'
import { toast } from 'react-toastify'
import getRelatorio from '../../lib/services/Get/get-relatorio.ts'
import clsx from 'clsx'

type ProductTableProps = {
  tableResult: ProdutoResult[]
  handleOpenNovoProduto: () => void
  // handleOpenRelatorio: () => void
  // handleOpenDeletar: () => void
}

function ProductTable(props: ProductTableProps) {
  const { tableResult, handleOpenNovoProduto } = props
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [openEditarProduto, setOpenEditarProduto] = useState(false)
  const [idProduto, setIdProduto] = useState<number>(0)

  const token = sessionStorage.getItem('sessionToken')

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleDelete = async (id: number) => {
    await deleteProduct(id, token)
      .then((res) => {
        console.log(res)
        toast.success('Produto deletado com sucesso!')
      })
      .catch((e) => {
        toast.error('Erro ao tentar deletar produto!')
        console.error('Erro ao tentar deletar produto:', e)
      })
  }

  const handleOpenRelatorio = async () => {
    await getRelatorio(token)
      .then((response) => {
        const csvData = response.split('\n').map(line => line.replace(/;\s*/g, ',')).join('\n')
        downloadCSV(csvData, 'relatorio.csv')
      })
      .catch((error) => {
        console.error('Erro ao tentar obter relatório', error)
      })
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleOpenEditarProduto = async (id: number) => {
    setOpenEditarProduto(!openEditarProduto)
    setIdProduto(id)
  }

  return (
    <>
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
                <>
                  <TableRow
                    key={row.produto.idProduto}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      background: row.produto.deleted ? '#f0f0f0' : ''
                    }}
                  >
                    <TableCell component='th' scope='row' align='right'>
                      <Paragraph size='h4'>{row.produto.idProduto}.</Paragraph>
                    </TableCell>
                    <TableCell component='th' scope='row'>
                      {row.produto.nome.length < 50 ? row.produto.nome : row.produto.nome.slice(0, 49) + '...'}
                    </TableCell>
                    <TableCell align='right'>
                      {row.produto.categoria}
                    </TableCell>
                    <TableCell align='right'>
                      {row.produto.precoVenda.toFixed(2).replace('.', ',')}
                    </TableCell>
                    <TableCell align='right'>
                      {row.produto.deleted ? 0 : row.quantidade}
                    </TableCell>
                    <TableCell sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }} align='right'>
                      <Button content='Apagar' className={clsx(
                        row.produto.deleted ? 'btn-disable' : ''
                      )} color='secondary' onClick={() => handleDelete(row.produto.idProduto)} />
                      <Button content='Editar' onClick={() => handleOpenEditarProduto(row.produto.idProduto)} />
                    </TableCell>
                  </TableRow>
                </>
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

      {openEditarProduto && (
        <div className='fixed w-full h-full top-[50%] left-[50%] z-50 bg-black bg-opacity-20' style={{ transform: 'translate(-50%, -50%)' }}>
          <div className='fixed top-[50%] left-[50%]' style={{ transform: 'translate(-50%, -50%)' }}>
            <EditarProduto id={idProduto} handleOpenEditarProduto={handleOpenEditarProduto} />
          </div>
        </div>
      )}
    </>
  )
}

export default ProductTable

const downloadCSV = (csvData: string, filename: string) => {
  const blob = new Blob([csvData], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('download', filename)
  a.click()
  window.URL.revokeObjectURL(url)
}
