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
  secondary: 'bg-[#B1B1B1] text-white',
  tertiary: 'bg-white text-gray-950',
  black: 'bg-black text-white',
  white: 'bg-white text-black'
}

function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      className={clsx(
        'btn',
        props.className,
        mapVariantToColor[props.color ?? 'primary']
      )}>
      {props.content}
    </a>
  )
}

export default Button
