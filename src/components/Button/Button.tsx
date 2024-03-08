import React from 'react'
import clsx from 'clsx'

export type ButtonProps = {
  content: string
  href?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'black' | 'white'
}

const mapToColor = {
  primary: 'bg-purple-500 text-white',
  secondary: 'bg-gray-500 text-white',
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
        mapToColor[props.color ?? 'primary']
      )}>
      {props.content}
    </a>
  )
}

export default Button
