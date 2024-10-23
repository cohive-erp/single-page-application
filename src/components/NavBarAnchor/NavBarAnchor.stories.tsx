import React from 'react'
import NavBarAnchor from './NavBarAnchor'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/NavBarAnchor'
}

export const Example = () => {
  return (
    <div className='inline-flex gap-4'>
      <NavBarAnchor section='Inicio' />
      <NavBarAnchor section='Sobre' />
    </div>
  )
}
