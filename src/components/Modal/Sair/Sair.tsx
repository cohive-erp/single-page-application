import React from 'react'
import Button from '../../Button/Button'

function SairModal() {
    return (
        <>
            <button className='btn' onClick={() => document.getElementById('my_modal_1')?.showModal()}>open modal</button>
            <dialog id='my_modal_1' className='modal'>
                <div className='modal-box w-[30%] h-[25%] flex flex-col justify-center items-center'>
                    <h3 className='font-bold text-lg'>Deseja mesmo sair?</h3>
                    <div className='modal-action w-full flex justify-cente'>
                        <form method='dialog' className='w-full'>
                            <div className='card-actions flex justify-between w-full px-4'>
                                <Button content='Sair' className='w-[45%] shadow-sm' onClick={() => console.log()} />
                                <Button content='Cancelar' className='w-[45%] shadow-sm' color='secondary' onClick={() => console.log()} />
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default SairModal