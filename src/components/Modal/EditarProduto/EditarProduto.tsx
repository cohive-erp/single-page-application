import React from 'react'
import Button from '../../Button/Button.tsx'
import Paragraph from '../../Paragraph/Paragraph.tsx'

function EditarProduto() {
    return (
        <div className='card w-[570px] h-[582px] bg-base-100 shadow-xl'>
            <div className='card-body justify-between gap-4'>
                <Paragraph size='h2'>Editar produto</Paragraph>
                <div className='flex flex-col gap-2'>
                    <Paragraph size='h3-regular'>Nome*</Paragraph>
                    <label className='input input-bordered border text-[#9A9696] flex items-center'>
                        <input type='text' className='grow text-black' placeholder='Ex: Tapete' />
                    </label>
                </div>
                <div className='flex flex-row w-full justify-start'>
                    <Paragraph size='h3-regular'>Quantidade*</Paragraph>
                    <Paragraph size='h3-regular'>Preço*</Paragraph>
                </div>
                <div className='flex flex-row w-full justify-between'>
                    <label className='input input-bordered text-[#9A9696] flex items-center gap-2 w-[49%]'>
                        <input type='text' className='grow text-black' placeholder='Quantidade do produto' />
                        Qtd.
                    </label>
                    <label className='input input-bordered text-[#9A9696] flex items-center gap-2 w-[49%]'>
                        <input type='text' className='grow text-black' placeholder='Preço unitário' />
                        R$
                    </label>
                </div>
                <div className='flex flex-col gap-2'>
                    <Paragraph size='h3-regular'>Categoria*</Paragraph>
                    <select className='select select-bordered w-full text-[#9A9696] '>
                        <option disabled selected>Selecionar categoria...</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <Paragraph size='h3-regular'>Descrição</Paragraph>
                    <textarea className='textarea textarea-bordered' placeholder='Escreva uma boa descrição do seu produto'></textarea>
                </div>
                <div className='card-actions justify-between'>
                    <Button content='Salvar' className='w-[40%] shadow-sm' onClick={() => console.log()} />
                    <Button content='Cancelar' className='w-[40%] shadow-sm' color='secondary' onClick={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

export default EditarProduto
