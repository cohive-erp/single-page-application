import React, { useState } from 'react'
import Button from '../Button/Button.tsx'
import Paragraph from '../Paragraph/Paragraph.tsx'
import clsx from 'clsx'
import { CreateLojaCommand } from '../../lib/types/create-loja-command.ts'
import createLoja from '../../lib/services/Create/create-loja.ts'
import { toast } from 'react-toastify'

type CadastrarLojaProps = {
    handleOpenCriar: () => void
}

function CadastrarLoja(props: CadastrarLojaProps) {
    const { handleOpenCriar } = props

    const [numero, setNumero] = useState<number>()
    const [cep, setCep] = useState<string>('')
    const [cnpj, setCnpj] = useState<string>('')

    const id = JSON.parse(sessionStorage.getItem('userData') ?? '{}').id
    const token = sessionStorage.getItem('sessionToken')

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    }

    const handleCreateLoja = async () => {
        const data: CreateLojaCommand = {
            numero,
            cep,
            cnpj,
            usuario: {
                id
            }
        }

        await createLoja(data, token)
            .then(() => {
                toast.success('Loja cadastrada com sucesso!')
                sessionStorage.setItem('lojaData', JSON.stringify(data))
                handleOpenCriar()
            })
            .catch((e) => {
                toast.error('Erro ao cadastrar loja!')
                console.log(e)
            })
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
                        <input type='text' className='grow text-black' placeholder='00.000.000/0001-00' value={cnpj} onChange={(e) => handleInputChange(e, setCnpj)} />
                    </label>
                </div>

                <div className='card-actions justify-between'>
                    <Button content='Criar' className='w-full shadow-sm' onClick={handleCreateLoja} />
                </div>
            </div>
        </div>
    )
}

export default CadastrarLoja
