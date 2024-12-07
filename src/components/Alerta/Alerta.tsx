/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Paragraph from '../../components/Paragraph/Paragraph'
import Button from '../../components/Button/Button'
import { ProdutoResult } from '../../lib/types/product-result'
import useClient from 'src/lib/client/useClient'

function Ocorrencias() {
  const client = useClient()

  const [products, setProducts] = useState<ProdutoResult[]>([])

  const userData = JSON.parse(sessionStorage.getItem('userData') ?? '')

  useEffect(() => {
    client.getStock(userData.loja.idLoja).then((response) => {
      setProducts(response)
    })
  }, [products])

  const handleOpenRelatorio = async () => {
    // await getReport(token)
    //   .then((response) => {
    //     const csvData = response.split('\n').map(line => line.replace(/;\s*/g, ',')).join('\n')
    //     downloadCSV(csvData, 'relatorio.csv')
    //   })
    //   .catch((error) => {
    //     console.error('Erro ao tentar obter relatório', error)
    //   })
  }

  return (
    <div className='card w-full bg-slate-100 shadow-xl flex justify-center items-center'>
      <div className='flex flex-col w-[80%] h-[70%] justify-between'>
        <Paragraph size='h2'>🚨 Ocorrências</Paragraph>
        <div className='h-[70%] overflow-auto flex flex-col gap-4'>
          {products?.map((produto, index) => (
            <>
              {produto.quantidade > 0 && produto.quantidade < 5 && (
                <span key={index} className='w-full bg-yellow-200 p-4 rounded-md shadow-sm text-black border'>⚠️ O produto <b>{produto.produto.nome}</b> está precisando de reposição.</span>
              )}

              {(produto.quantidade < 1 || produto.produto.deleted) && (
                <span key={index} className='w-full bg-red-200 p-4 rounded-md shadow-sm text-black border'>🚨 O produto <b>{produto.produto.nome}</b> está em falta!</span>
              )}
            </>
          ))}
        </div>
        <Button content='Gerar relatório' className='w-full shadow-sm' onClick={handleOpenRelatorio} />
      </div>
    </div>
  )
}

export default Ocorrencias
