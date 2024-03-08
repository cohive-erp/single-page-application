import React from 'react'

type LogoCohiveProps = {
  color?: 'purple' | 'white' | 'black'
}

const logoColors = {
  purple: 'logoCohive.svg',
  white: 'logoCohiveWhite.svg',
  black: 'logoCohiveBlack.svg'
}

function LogoCohive(props: LogoCohiveProps) {
  const { color } = props

  return (
    <img
      src={logoColors[color ?? 'purple']}
      alt='Logo da Cohive'
      width={200}
      height={84}
    />
  )
}

export default LogoCohive
