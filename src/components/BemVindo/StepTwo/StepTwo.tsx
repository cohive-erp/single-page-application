import React from 'react'
import Button from '../../Button/Button.tsx'
import Paragraph from '../../Paragraph/Paragraph.tsx'

function StepTwo() {
    return (
        <>
            <button className='btn' onClick={() => document.getElementById('my_modal_1')?.showModal()}>open modal</button>
            <dialog id='my_modal_1' className='modal'>
                <div className='modal-box w-[35%] h-[25%] flex flex-col justify-center items-center'>

                    <Paragraph size='h3'>Eu sou o <span className='text-purple-500'>Estoquinho</span>, vou te ajudar a entender</Paragraph>
                    <Paragraph size='h3'>melhor a ferramenta</Paragraph>
                    <div className='modal-action w-full flex justify-cente'>
                        <form method='dialog' className='w-full'>
                            <div className='card-actions flex justify-center w-full px-4'>
                                <Button content='Próximo' className='w-[45%] shadow-sm' onClick={() => console.log()} />
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default StepTwo