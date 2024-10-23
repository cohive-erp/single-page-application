import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import DatePicker from '../../DatePicker/DatePicker'

function Relatorio() {

    return (
        <div className='card w-[60%] h-[80%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body justify-between gap-6'>
                <Paragraph size='h3'>Gerar relatório</Paragraph>
                <DatePicker></DatePicker>
                <div className='card-actions justify-between'>
                    <Button content='Gerar relatório' onClick={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

export default Relatorio
