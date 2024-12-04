import React, { useState } from 'react'
import Paragraph from '../Paragraph/Paragraph'
import clsx from 'clsx'

function CadastrarLoja() {
    const [numero, setNumero] = useState<number>()
    const [cep, setCep] = useState<string>('')
    const [cnpj, setCnpj] = useState<string>('')

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    }

    const className = 'border-purple-500 shadow-md text-[#9A9696] flex items-center bg-white'

    return (
        <div className='card w-[570px] h-[450px] bg-white shadow-xl'>
            <div className='card-body justify-between gap-4'>
                <Paragraph size='h2'>Criar loja</Paragraph>

                <div className='flex flex-col gap-2'>
                    <Paragraph size='h3-regular'>CEP*</Paragraph>
                    <label className={clsx('input input-bordered', className)}>
                        <input type='text' className='grow text-black' placeholder='01234-567' value={cep} onChange={(e) => handleInputChange(e, setCep)} />
                    </label>
                </div>

                <div className='flex flex-col gap-2'>
                    <Paragraph size='h3-regular'>Número*</Paragraph>
                    <label className={clsx('input input-bordered', className)}>
                        <input type='text' className='grow text-black' placeholder='Ex: 300' value={numero} onChange={(e) => handleInputChange(e, setNumero)} />
                    </label>
                </div>

                <div className='flex flex-col gap-2'>
                    <Paragraph size='h3-regular'>CNPJ*</Paragraph>
                    <label className={clsx('input input-bordered', className)}>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CadastrarLoja
