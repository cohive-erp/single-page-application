/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import { ProdutoResult } from '../../lib/types/product-result'

type UltimosEstoquesProps = {
  products: ProdutoResult[]
}

function UltimosEstoques(props: UltimosEstoquesProps) {
  const { products } = props

  return (
    <div className='card w-[33%] bg-slate-100 shadow-xl'>
      <div className='card-body'>
        <Paragraph size='h2'>💰 Aproveite e venda!</Paragraph>
        {products && products
          .slice(0, 3)
          .map((produto, index) => (
            <>
              {produto.quantidade > 2 && (
                <span key={index} className='w-full bg-green-200 p-4 rounded-md shadow-sm text-black border'>
                  ⬆️ O produto <b>{produto.produto.nome}</b> está com uma boa quantidade em estoque.
                </span>
              )}

              {produto.quantidade < 2 && produto.quantidade > 0 && (
                <span key={index} className='w-full bg-yellow-200 p-4 rounded-md shadow-sm text-black border'>
                  ⚠️ O produto <b>{produto.produto.nome}</b> está com poucas unidades em estoque.
                </span>
              )}
            </>
          ))}

        {!products && (
          <div className='w-full bg-gray-200 p-4 rounded-md shadow-sm border'>
            <span className='text-black'>🕸️ Nenhum produto para vender</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default UltimosEstoques
