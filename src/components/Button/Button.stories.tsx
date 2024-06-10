import React from 'react'
import Button from './Button'
import LoadingButton from './LoadingButton'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button'
}

export const Example = () => {
  return (
    <Button content='Teste' />
  )
}

export const Loading = () => {
  return (
    <LoadingButton content='Carregando' />
  )
}
