import React, { useState, useRef } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import Step from '../Step/Step'
import KeyIcon from '@mui/icons-material/Key'
import ReCAPTCHA from 'react-google-recaptcha'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LogoCohive from '../../LogoCohive/LogoCohive'

function StepOne() {
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })

    return (
        <div className='card lg:card-side w-full h-full bg-base-100 shadow-xl font-poppins'>
            <div className='card-body justify-between gap-4'>
                <LogoCohive width={120}/>
                <Paragraph size='h3'>Adicionar novo produto</Paragraph>
                <span className="label-text">Nome</span>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <MailOutlineIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Ex: tapete' />
                </label>
                <div className='flex flex-row w-full justify-between'>
                    <span className="label-text">Quantidade</span>
                    <span className="label-text-alt">Preço</span>
                </div>
                <div className='flex flex-row w-full justify-between'>
                    <label className='input input-bordered text-[#9A9696] flex items-center gap-2 w-[49%]'>
                        <input type='text' className='grow text-black' placeholder='Ex: 15' />
                    </label>
                    <label className='input input-bordered text-[#9A9696] flex items-center gap-2 w-[49%]'>
                        <input type='text' className='grow text-black' placeholder='R$' />
                    </label>
                </div>
                <span className="label-text">Categoria</span>
                <select className="select select-bordered card w-[100%]">
                    <option disabled selected>Selecionar</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <span className="label-text">Drescição</span>
                <textarea className="textarea textarea-bordered" placeholder="Breve descrição"></textarea>
                <div className='card-actions justify-center'>
                    <Button content='Adicionar' onClick={() => console.log()} />
                </div>
            </div>
            <figure>
                <img className='w-full h-[76%]' src="ProductHunt-bro.svg" alt="produtos" />
            </figure>
        </div>
    )
}

export default StepOne
