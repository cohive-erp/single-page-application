/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer.tsx'
import ProductTable from '../../components/Table/ProductTable.tsx'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header/Header.tsx'
import NovoProduto from '../../components/Modal/NovoProduto/NovoProduto.tsx'
import { ProdutoResult } from '../../lib/types'
import { getStock } from '../../lib/services/index.ts'

function EstoquePage() {
  const [openNovoProduto, setOpenNovoProduto] = useState(false)
  const [produtos, setProdutos] = useState<ProdutoResult[]>([])

  const nome = JSON.parse(sessionStorage.getItem('userData') ?? '{}').nome
  const token = sessionStorage.getItem('sessionToken') ?? ''

  const handleOpenNovoProduto = () => {
    setOpenNovoProduto(!openNovoProduto)
  }

  const getAllProducts = async () => {
    await getStock(token)
      .then((response) => {
        setProdutos(response)
      })
      .catch((e) => {
        console.error('Erro ao tentar obter produtos', e)
      })
  }

  useEffect(() => {
    getAllProducts()
  }, [produtos])

  return (
    <>
      <div className='bg-slate-200 flex flex-col justify-center items-center'>
        <Helmet>
          <title>Estoque | Sistema ERP: Gestão rápida, prática e útil | Cohive</title>
        </Helmet>
        <Header name={nome} />
        <div className='w-full h-[80%] flex justify-center items-center pt-[2%] pb-[2%]'>
          <ProductTable
            tableResult={produtos}
            handleOpenNovoProduto={handleOpenNovoProduto}
          // handleOpenDeletar={handleOpenDeletar}
          />
        </div>
        <Footer />
      </div>

      {openNovoProduto && (
        <div className='fixed w-full h-full top-[50%] left-[50%] z-50 bg-black bg-opacity-20' style={{ transform: 'translate(-50%, -50%)' }}>
          <div className='fixed top-[50%] left-[50%]' style={{ transform: 'translate(-50%, -50%)' }}>
            <NovoProduto handleOpenNovoProduto={handleOpenNovoProduto} />
          </div>
        </div>
      )}
    </>
  )
}

export default EstoquePage
