import React, { useEffect, useState } from 'react'
import Paragraph from '../../components/Paragraph/Paragraph.tsx'
import Button from '../../components/Button/Button.tsx'
import { ProdutoResult } from '../../lib/types/ProdutoResult.ts'
import getEstoque from '../../lib/services/Get/get-estoque.ts'

function Ocorrencias() {
  const [produtos, setProdutos] = useState<ProdutoResult[]>()

  const token = sessionStorage.getItem('sessionToken')

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
  }, [produtos])

  return (
    <div className='card w-full bg-slate-100 shadow-xl'>
      <div className='card-body gap-2'>
        <Paragraph size='h2'>🚨 Ocorrências</Paragraph>

        <div className=''>
          {produtos?.map((produto, index) => (
            <>
              {produto.quantidade < 5 && (
                <div key={index} className='flex flex-col w-full'>
                  <span className='w-full bg-yellow-200 p-4 rounded-md shadow-sm text-black border'> O produto {produto.produto.nome} está precisando de reposição</span>
                </div>
              )}

              {produto.quantidade < 1 && (
                <div key={index} className='flex flex-col w-full'>
                  <span className='w-full bg-red-200 p-4 rounded-md shadow-sm text-black border'> O produto {produto.produto.nome} está em falta!</span>
                </div>
              )}
            </>
          ))}
        </div>

        <div className='card-actions justify-center'>
          <Button content='Gerar relatório' className='w-full shadow-sm' onClick={() => { }} />
        </div>
      </div>
    </div >
  )
}

export default Ocorrencias
