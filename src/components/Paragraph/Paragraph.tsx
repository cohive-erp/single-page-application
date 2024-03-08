import React from 'react'

type ParagraphProps = {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: React.ReactNode,
}

export default function Paragraph(props: ParagraphProps) {
  const { size, children } = props

  const tailwindVariant = {
    h1: 'font-poppins text-black text-[28px] font-bold',
    h2: 'font-poppins text-black text-[24px] font-bold',
    h3: 'font-poppins text-black text-[20px] font-bold',
    h4: 'font-poppins text-black text-[16px] font-bold',
    h5: 'font-poppins text-black text-[14px] font-medium italic',
  }

  return (
    <p className={tailwindVariant[size]}>
      {children}
    </p>
  )
}