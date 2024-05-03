import React from 'react'
import Header from './Header'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Header'
}

export const Example = () => {
  return (
    <Header name='Raquel' totalProducts={100} />
  )
}
