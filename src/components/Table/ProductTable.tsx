import React, { useState } from 'react'
import Button from '../Button/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import ProductTableHead from './components/ProductTableHead/ProductTableHead'
import Paragraph from '../Paragraph/Paragraph'
import Search from '../Search/Search'
import LoadingButton from '../Button/LoadingButton'
import { toast } from 'react-toastify'
import clsx from 'clsx'
import { ProdutoResult } from '../../lib/types/product-result'
import EditarProduto from '../Modal/EditarProduto/EditarProduto'
import useClient from '../../lib/client/useClient'
import { useTranslation } from 'react-i18next'

type ProductTableProps = {
  tableResult: ProdutoResult[]
  handleOpenNewProduct: () => void
}

function ProductTable(props: ProductTableProps) {
  const { tableResult, handleOpenNewProduct } = props
  const client = useClient()
  const { t } = useTranslation()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [openEditProduct, setOpenEditProduct] = useState(false)
  const [productId, setProductId] = useState<number>(0)

  const handleChangePage = (_event: unknown, newPage: number) => { setPage(newPage) }

  const handleDeleteProduct = async (id: number) => {
    try {
      await client.deleteProductById(id)
      toast.success(t('CreateProductSuccess'))
    } catch (e) {
      toast.error(t('CreateProductError'))
      console.error(t('CreateProductError'), e)
    }
  }

  const handleOpenReport = async () => {
    try {
      const response = await client.getReport()
      const csv = response.split('\n').map((line: string) => line.replace(/;\s*/g, ',')).join('\n')
      downloadCSV(csv, `relatorio-${new Date().toDateString()}.csv`)
      toast.success(t('CreateReportSuccess'))
    } catch (e) {
      toast.error(t('CreateReportError'))
      console.error(t('CreateReportError'), e)
    }
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleOpenEditProduct = async (id: number) => {
    setOpenEditProduct(!openEditProduct)
    setProductId(id)
  }

  return (
    <>
      <Paper sx={{ width: '80%', overflow: 'hidden', borderRadius: '0.75%' }}>
        <div className='flex justify-between w-full p-4 mb-6'>
          <Paragraph size='h1'>
            📦 {t('Products')}
          </Paragraph>
          <div className='flex flex-row gap-4 w-[70%] justify-end'>
            <Button content={t('NewProduct')} className='w-[35%]' onClick={handleOpenNewProduct} />

            {tableResult.length > 0 ? (
              <>
                <Button content={t('GetData')} className='w-[35%]' onClick={handleOpenReport} />
                <Search className='w-[30%]' />
              </>
            ) : (
              <>
                <Button content={t('GetData')} className='w-[35%] btn-disabled' />
                <Search className='w-[30%] input-disabled' />
              </>
            )}

            {false && <LoadingButton content={t('Generating')} className='w-[35%]' />}
          </div>
        </div>
        <TableContainer>
          <Table stickyHeader>
            <ProductTableHead />
            <TableBody>
              {tableResult.length > 0 && tableResult
                .filter((row) => row.produto.nome)
                .map((row) => (
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
                        <Button content={t('Delete')} className={clsx(
                          row.produto.deleted ? 'btn-disable' : ''
                        )} color='secondary' onClick={() => handleDeleteProduct(row.produto.idProduto)} />
                        <Button content={t('Edit')} onClick={() => handleOpenEditProduct(row.produto.idProduto)} />
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

      {openEditProduct && (
        <div className='fixed w-full h-full top-[50%] left-[50%] z-50 bg-black bg-opacity-20' style={{ transform: 'translate(-50%, -50%)' }}>
          <div className='fixed top-[50%] left-[50%]' style={{ transform: 'translate(-50%, -50%)' }}>
            <EditarProduto id={productId} handleOpenEditProduct={handleOpenEditProduct} />
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
