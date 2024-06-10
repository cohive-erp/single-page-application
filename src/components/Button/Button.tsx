import React from 'react'
import clsx from 'clsx'

export type ButtonProps = {
  content: string | any
  href?: string,
  className?: string
  color?: 'primary' | 'secondary' | 'black' | 'white'
  onClick?: () => void
}

const mapVariantToColor = {
  primary: 'bg-purple-500 text-white hover:bg-purple-400',
  secondary: 'bg-gray-400 text-white hover:bg-gray-300',
  white: 'bg-white text-gray-950 hover:bg-gray-200',
  black: 'bg-black text-white hover:bg-gray-600'
}

function Button(props: ButtonProps) {
  return (
    <>
      {props.href ?
        <a
          href={props.href}
          className={clsx(
            'btn',
            props.className,
            mapVariantToColor[props.color ?? 'primary']
          )}>
          {props.content}
        </a>
        :
        <button
          onClick={props.onClick}
          className={clsx(
            'btn',
            props.className,
            mapVariantToColor[props.color ?? 'primary']
          )}>
          {props.content}
        </button>}
    </>
  )
}

export default Button
