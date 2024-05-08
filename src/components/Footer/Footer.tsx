import React from 'react'

function Footer() {
  return (
    <footer className='footer p-10 bg-gray-950 text-base-content'>
      <nav className='text-white'>
        <h6 className='footer-title'>coHive 🐝</h6>
        <a href='/#inicio' className='link link-hover'>Início</a>
        <a href='/#sobre' className='link link-hover'>Sobre</a>
        <a href='/#funcionalidade' className='link link-hover'>Funcionalidade</a>
        <a href='/#contato' className='link link-hover'>Contato</a>
      </nav>
      <nav className='text-white'>
        <h6 className='footer-title'>Download</h6>
        <a href='/#' className='link link-hover'>Mac</a>
        <a href='/#' className='link link-hover'>Windows</a>
        <a href='/#' className='link link-hover'>iPhone</a>
        <a href='/#' className='link link-hover'>Android</a>
      </nav>
      <nav className='text-white'>
        <h6 className='footer-title'>Legal</h6>
        <a href='/termos' className='link link-hover'>Termos de uso</a>
        <a href='/privacidade' className='link link-hover'>Seguraça e privacidade</a>
        <a href='/politica' className='link link-hover'>Política de Cookie</a>
      </nav>
      <nav className='text-white'>
        <h6 className='footer-title'>Social</h6>
        <a href='/#' className='link link-hover'>Instagram</a>
        <a href='/#' className='link link-hover'>Twitter</a>
        <a href='/#' className='link link-hover'>Facebook</a>
      </nav>
    </footer>
  )
}

export default Footer
