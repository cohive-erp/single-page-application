/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Paragraph from '../../components/Paragraph/Paragraph.tsx'
import Button from '../../components/Button/Button.tsx'
import { ProdutoResult } from '../../lib/types/product-result.ts'
import { getReport, getStock } from '../../lib/services/index.ts'

function Ocorrencias() {
  const [produtos, setProdutos] = useState<ProdutoResult[]>()

  const token = sessionStorage.getItem('sessionToken') ?? ''

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

  const handleOpenRelatorio = async () => {
    await getReport(token)
      .then((response) => {
        const csvData = response.split('\n').map(line => line.replace(/;\s*/g, ',')).join('\n')
        downloadCSV(csvData, 'relatorio.csv')
      })
      .catch((error) => {
        console.error('Erro ao tentar obter relatório', error)
      })
  }

  return (
    <div className='card w-full bg-slate-100 shadow-xl flex justify-center items-center'>
      <div className='flex flex-col w-[80%] h-[70%] justify-between'>
        <Paragraph size='h2'>🚨 Ocorrências</Paragraph>
        <div className='h-[70%] overflow-auto flex flex-col gap-4'>
          {produtos?.map((produto, index) => (
            <>
              {produto.quantidadeVendida > 0 && produto.quantidadeVendida < 5 && (
                <span key={index} className='w-full bg-yellow-200 p-4 rounded-md shadow-sm text-black border'>⚠️ O produto <b>{produto.produto.nome}</b> está precisando de reposição.</span>
              )}

              {(produto.quantidadeVendida < 1 || produto.produto.deleted) && (
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

const downloadCSV = (csvData: string, filename: string) => {
  const blob = new Blob([csvData], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('download', filename)
  a.click()
  window.URL.revokeObjectURL(url)
}
