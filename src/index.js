import React from 'react'

export type RootLayoutProps = { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-br'>
      <body className='bg-white'>
          {children}
      </body>
    </html>
  )
}
