import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer/Footer'
import ProductTable from '../../components/Table/ProductTable'
import Header from '../../components/Header/Header'
import NovoProduto from '../../components/Modal/NovoProduto/NovoProduto'
import useClient from '../../lib/client/useClient'
import { useQuery } from '@tanstack/react-query'

function EstoquePage() {
  const client = useClient()
  const { t } = useTranslation()

  const [openNewProduct, setOpenNewProduct] = useState(false)

  const userData = JSON.parse(sessionStorage.getItem('userData') ?? '')

  const { data: products } = useQuery({
    queryKey: ['stock', userData.loja.idLoja],
    queryFn: () => client.getStock(userData.loja.idLoja),
    enabled: !!userData.loja,
    staleTime: 1000 * 60 * 5
  })

  const handleOpenNewProduct = () => {
    setOpenNewProduct(!openNewProduct)
  }

  return (
    <>
      <div className='bg-slate-200 flex flex-col justify-center items-center'>
        <Helmet>
          <title>{t('StockPage')}</title>
        </Helmet>
        <Header name={userData.nome} totalProducts={products?.length ?? 0} />
        <div className='w-full flex justify-center items-center pt-[2%] pb-[2%]'>
          <ProductTable
            tableResult={products ?? []}
            handleOpenNewProduct={handleOpenNewProduct}
          />
        </div>
        <Footer />
      </div>

      {openNewProduct && (
        <div className='fixed w-full h-full top-[50%] left-[50%] z-50 bg-black bg-opacity-20' style={{ transform: 'translate(-50%, -50%)' }}>
          <div className='fixed top-[50%] left-[50%]' style={{ transform: 'translate(-50%, -50%)' }}>
            <NovoProduto handleOpenNewProduct={handleOpenNewProduct} />
          </div>
        </div>
      )}
    </>
  )
}

export default EstoquePage
