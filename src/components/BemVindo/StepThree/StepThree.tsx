import React from 'react'
import Button from '../../Button/Button.tsx'
import Paragraph from '../../Paragraph/Paragraph.tsx'

function StepThree() {
    return (
        <>
            <button className='btn' onClick={() => document.getElementById('my_modal_1')?.showModal()}>open modal</button>
            <dialog id='my_modal_1' className='modal'>
                <div className='modal-box max-w-full w-[40%] h-[30%] flex flex-col justify-center items-center text-wrap text-center'>
                    <Paragraph size='h3'>Antes de iniciarmos, você precisa cadastrar sua loja, clique em “<span className='text-purple-500'>Cadastrar</span>” para continuar sua jornada.</Paragraph>
                    <div className='modal-action w-full flex justify-center'>
                        <form method='dialog' className='w-full'>
                            <div className='card-actions flex justify-center w-full px-4'>
                                <Button content='Cadastrar' className='w-[45%] shadow-sm' onClick={() => console.log()} />
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default StepThree