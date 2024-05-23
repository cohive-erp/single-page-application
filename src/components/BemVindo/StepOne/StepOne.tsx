import React from 'react'
import Button from '../../Button/Button.tsx'
import Paragraph from '../../Paragraph/Paragraph.tsx'

function StepOne() {
    return (
        <>
            <button className='btn' onClick={() => document.getElementById('my_modal_1')?.showModal()}>open modal</button>
            <dialog id='my_modal_1' className='modal'>
                <div className='modal-box w-[30%] h-[25%] flex flex-col justify-center items-center'>

                    <Paragraph size='h3'>Boas vindas, <span className='text-purple-500'>Raquel Guilhermino</span>,</Paragraph>
                    <Paragraph size='h3'>é um prazer te ter conosco!</Paragraph>
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

export default StepOne