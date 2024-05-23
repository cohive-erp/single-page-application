import React from 'react'
import clsx from 'clsx'

export type ButtonProps = {
  content: string
  href?: string,
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'black' | 'white'
  onClick?: () => void
}

const mapVariantToColor = {
  primary: 'bg-purple-500 text-white hover:bg-purple-400',
  secondary: 'bg-[#B1B1B1] text-white hover:bg-white',
  tertiary: 'bg-white text-gray-950 hover:bg-[#B1B1B1]',
  black: 'bg-black text-white hover:bg-[#B1B1B1]',
  white: 'bg-white text-black hover:bg-[#B1B1B1]'
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
