import React from 'react'
import clsx from 'clsx'

export type LoadingButtonProps = {
  content: string | any
  className?: string
  color?: 'primary' | 'secondary' | 'black' | 'white'
}

const mapVariantToColor = {
  primary: 'bg-purple-500 text-white hover:bg-purple-400',
  secondary: 'bg-gray-400 text-white hover:bg-gray-300',
  white: 'bg-white text-gray-950 hover:bg-gray-200',
  black: 'bg-black text-white hover:bg-gray-600'
}

function LoadingButton(props: LoadingButtonProps) {
  return (
    <button
      className={clsx(
        'btn btn-disable',
        props.className,
        mapVariantToColor[props.color ?? 'primary']
      )}>
      <span className='loading loading-spinner'></span>
      {props.content}
    </button>
  )
}

export default LoadingButton
