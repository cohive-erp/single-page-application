import React from 'react'

type LogoCohiveProps = {
  color?: 'purple' | 'white' | 'black'
  width?: number
  height?: number
}

const logoColors = {
  purple: 'logoCohive.svg',
  white: 'logoCohiveWhite.svg',
  black: 'logoCohiveBlack.svg'
}

function LogoCohive(props: LogoCohiveProps) {
  const { color, width, height } = props

  return (
    <img
      src={logoColors[color ?? 'purple']}
      alt='Logo da Cohive'
      width={width}
      height={height}
    />
  )
}

export default LogoCohive
