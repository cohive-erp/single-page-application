import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer.tsx'
import ProductTable from '../../components/Table/ProductTable.tsx'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header/Header.tsx'
import NovoProduto from '../../components/Modal/NovoProduto/NovoProduto.tsx'
import EditarProduto from '../../components/Modal/EditarProduto/EditarProduto.tsx'
import Relatorio from '../../components/Modal/Relatorio/Relatorio.tsx'
import getEstoque from '../../lib/services/Get/get-estoque.ts'
import { ProdutoResult } from '../../lib/types/ProdutoResult.ts'

function EstoquePage() {
  const [openNovoProduto, setOpenNovoProduto] = useState(false)
  const [openRelatorio, setOpenRelatorio] = useState(false)
  const [openEditarProduto, setOpenEditarProduto] = useState(false)
  const [openDeletar, setOpenDeletar] = useState(false)
  const [produtos, setProdutos] = useState<ProdutoResult[]>([])

  const token = sessionStorage.getItem('sessionToken')
  const nome = JSON.parse(sessionStorage.getItem('valores') ?? '{}').nome

  const handleOpenNovoProduto = () => {
    setOpenNovoProduto(!openNovoProduto)
  }

  const handleOpenRelatorio = () => {
    setOpenRelatorio(!openRelatorio)
  }

  const handleOpenEditarProduto = () => {
    setOpenEditarProduto(!openEditarProduto)
  }

  const handleOpenDeletar = () => {
    setOpenDeletar(!openDeletar)
  }

  const getAllProducts = async () => {
    await getEstoque(token)
      .then((response) => {
        setProdutos(response)
      })
      .catch((e) => {
        console.error('Erro ao tentar obter produtos', e)
      })
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <div className='bg-slate-200 flex flex-col justify-center items-center'>
        <Helmet>
          <title>Estoque: {nome ?? ''} | Sistema ERP: Gestão rápida, prática e útil | Cohive</title>
        </Helmet>
        <Header name='Raquel' totalProducts={2} />
        <div className='w-full h-[80%] flex justify-center items-center pt-[2%] pb-[2%]'>
          <ProductTable
            tableResult={produtos}
            handleOpenNovoProduto={handleOpenNovoProduto}
            handleOpenRelatorio={handleOpenRelatorio}
            handleOpenEditarProduto={handleOpenEditarProduto}
            handleOpenDeletar={handleOpenDeletar}
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

      {openEditarProduto && (
        <div className='fixed w-full h-full top-[50%] left-[50%] z-50 bg-black bg-opacity-20' style={{ transform: 'translate(-50%, -50%)' }}>
          <div className='fixed top-[50%] left-[50%]' style={{ transform: 'translate(-50%, -50%)' }}>
            <EditarProduto id={0} handleOpenEditarProduto={handleOpenEditarProduto} />
          </div>
        </div>
      )}

      {openDeletar && (
        <div className='fixed w-full h-full top-[50%] left-[50%] z-50 bg-black bg-opacity-20' style={{ transform: 'translate(-50%, -50%)' }}>
          <div className='fixed top-[50%] left-[50%]' style={{ transform: 'translate(-50%, -50%)' }}>
            {/* <NovoProduto id={0} /> */}
          </div>
        </div>
      )}
    </>
  )
}

export default EstoquePage
