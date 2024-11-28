import React from 'react'
import ProductTable from './ProductTable'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/ProductTable'
}

export const Example = () => {
  return (
    <ProductTable tableResult={[]} handleOpenNewProduct={() => {}} />
  )
}

export const NoDataExample = () => {
  return (
    <ProductTable tableResult={[]} handleOpenNewProduct={() => {}} />
  )
}
