import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import { ProdutoResult } from '../../lib/types/product-result'

type OcorrenciasProps = {
  products: ProdutoResult[]
}

function Ocorrencias(props: OcorrenciasProps) {
  const { products } = props

  return (
    <div className='card w-[33%] bg-slate-100 shadow-xl'>
      <div className='card-body items-start'>
        <div>
          <Paragraph size='h2'>🚨 Últimas ocorrências</Paragraph>
        </div>

        {products && products.map((produto, index) => (
          <>
            {produto.quantidade > 0 && produto.quantidade < 5 && (
              <span key={index} className='w-full bg-yellow-200 p-4 rounded-md shadow-sm text-black border'>⚠️ O produto <b>{produto.produto.nome}</b> está precisando de reposição.</span>
            )}

            {(produto.quantidade < 1 || produto.produto.deleted) && (
              <span key={index} className='w-full bg-red-200 p-4 rounded-md shadow-sm text-black border'>🚨 O produto <b>{produto.produto.nome}</b> está em falta!</span>
            )}
          </>
        ))}

        {!products && (
          <div className='w-full bg-green-200 p-4 rounded-md shadow-sm border'>
            <span className='text-black'>🎉 Nenhuma ocorrência de produtos!</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ocorrencias
