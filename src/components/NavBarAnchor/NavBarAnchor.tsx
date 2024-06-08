import React from 'react'

export type NavBarAnchorProps = {
  section: 'Inicio' | 'Sobre' | 'Download' | 'Planos'
}

export default function NavBarAnchor(props: NavBarAnchorProps) {
  return (
    <a
      href={`/#${props.section}`}
      className='no-underline font-poppins text-gray-950 hover:text-purple-500'
    >
      {props.section}
    </a>
  )
}
