/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Button from '../Button/Button.tsx'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  return (
    <footer className='footer p-10 bg-gray-950 text-base-content'>
      <nav className='text-white'>
        <h6 className='footer-title'>coHive 🐝</h6>
        <a href='/#Inicio' className='link link-hover'>Início</a>
        <a href='/#Sobre' className='link link-hover'>Sobre</a>
        <a href='/#Download' className='link link-hover'>Download</a>
        <a href='/#Planos' className='link link-hover'>Planos</a>
      </nav>
      <nav className='text-white'>
        <h6 className='footer-title'>Legal</h6>
        <a onClick={() => navigate('/termos')} className='link link-hover'>Termos de uso</a>
        <a onClick={() => navigate('/privacidade')} className='link link-hover'>Seguraça e privacidade</a>
        <a onClick={() => navigate('/politica')} className='link link-hover'>Política de Cookie</a>
      </nav>
      <nav className='text-white'>
        <h6 className='footer-title'>Social</h6>
        <a onClick={() => navigate('/')} className='link link-hover'>Instagram</a>
        <a onClick={() => navigate('/')} className='link link-hover'>Twitter</a>
        <a onClick={() => navigate('/')} className='link link-hover'>Facebook</a>
      </nav>
      <form>
        <h6 className='footer-title'>Newsletter</h6>
        <fieldset className='form-control w-80'>
          <label className='label'>
            <span className='label-text'>Digite seu endereço de email</span>
          </label>
          <div className='join'>
            <input type='text' placeholder='nome@site.com' className='input input-bordered join-item' />
            <Button content='Inscrever-se' className='btn join-item' />
          </div>
        </fieldset>
      </form>
    </footer>
  )
}

export default Footer
