import React, { useState } from 'react'
import Button from '../Button/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Tooltip from '@mui/material/Tooltip'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import ProductTableHead from './components/ProductTableHead/ProductTableHead'
import Paragraph from '../Paragraph/Paragraph'
import Search from '../Search/Search'
import LoadingButton from '../Button/LoadingButton'
import { toast } from 'react-toastify'
import { ProdutoResult } from '../../lib/types/product-result'
import EditarProduto from '../Modal/EditarProduto/EditarProduto'
import useClient from '../../lib/client/useClient'
import { useTranslation } from 'react-i18next'
import SeeMore from '../SeeMore/SeeMore'

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
  const [productQuantity, setProductQuantity] = useState<number>(0)

  const handleChangePage = (_event: unknown, newPage: number) => { setPage(newPage) }

  const handleOpenReport = async () => {
    try {
      await client.getReport()
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

  const handleOpenEditProduct = async (id: number, quantidade: number) => {
    setOpenEditProduct(!openEditProduct)
    setProductId(id)
    setProductQuantity(quantidade)
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
        <TableContainer className='px-2'>
          <Table stickyHeader>
            <ProductTableHead />
            <TableBody>
              {tableResult.length > 0 && tableResult
                .filter((row) => row.produto.nome)
                .map((row, index) => (
                  <>
                    <TableRow
                      key={index}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                        background: row.quantidade === 0 ? '#f0f0f0' : ''
                      }}
                    >
                      <TableCell component='th' scope='row'>
                      {row.produto.nome.length < 20 ? row.produto.nome : (
                          <Tooltip title={row.produto.nome} placement='top-start'>
                            <div>
                              {row.produto.nome.slice(0, 19) + '...'}
                            </div>
                          </Tooltip>
                        )}
                      </TableCell>
                      <TableCell align='left'>
                        {row.produto.categoria.length < 60 ? row.produto.categoria : (
                          <Tooltip title={row.produto.categoria} placement='top-start'>
                            <div>
                              {row.produto.categoria.slice(0, 59) + '...'}
                            </div>
                          </Tooltip>
                        )}
                      </TableCell>
                      <TableCell align='right'>
                        {row.produto.precoVenda.toFixed(2).replace('.', ',')}
                      </TableCell>
                      <TableCell align='right'>
                        {row.quantidade}
                      </TableCell>
                      <TableCell sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }} align='right'>
                        <SeeMore
                          id={row.produto.idProduto}
                          dataEntradaInicial={row.dataEntradaInicial}
                          handleEdit={() => handleOpenEditProduct(row.produto.idProduto, row.quantidade)}
                        />
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
            <EditarProduto id={productId} quantidade={productQuantity} handleOpenEditProduct={handleOpenEditProduct} />
          </div>
        </div>
      )}
    </>
  )
}

export default ProductTable
