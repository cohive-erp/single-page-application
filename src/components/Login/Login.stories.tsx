import React from 'react'
import Login from './Login'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Login'
}

export const Example = () => {
  return (
    <div className='w-[50%] flex justify-center items-center'>
      <Login />
    </div>
  )
}
