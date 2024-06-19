import React from 'react'
import Kpi from './Kpi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Kpi'
}

export const Example = () => {
  return (
    <Kpi value={`R$${5789}`} title='Fatura mensal' />
  )
}
