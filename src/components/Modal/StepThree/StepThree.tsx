import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import Step from '../Step/Step'
import StoreIcon from '@mui/icons-material/Store'
import WorkIcon from '@mui/icons-material/Work'
import FormInput from '../../FormInput/FormInput'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function StepThree() {
    const [dados, _setDados] = useState({
        nome: '',
        cnpj: '',
        numeroFunc: ''
    })

    const validationSchema = Yup.object().shape({
        nome: Yup.string()
            .required('Nome da loja é obrigatório'),
        cnpj: Yup.string()
            .min(14, 'CNPJ de tamanho inválido')
            .max(14, 'CNPJ de tamanho inválido')
            .required('CNPJ é obrigatório'),
        numeroFunc: Yup.string()
            .required('Número de funcionários é obrigatório')
    })

    const formik = useFormik({
        initialValues: {
            nome: dados.nome,
            cnpj: dados.cnpj,
            numeroFunc: dados.numeroFunc
        },
        validationSchema,
        onSubmit: () => { console.log('submit') }
    })

    return (
        <div className='card w-[60%] h-[80%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body gap-4'>
                <Step step={3} />
                <Paragraph size='h3'>Dados da loja</Paragraph>
                <form onSubmit={formik.submitForm}>
                    <FormInput icon={<StoreIcon fontSize='small' />} typeInput='text' placeholder='Nome da loja' />
                    <div className='flex flex-row w-full justify-between'>
                        <FormInput icon={<WorkIcon fontSize='small' />} typeInput='number' placeholder='CNPJ' className='w-[49%]' />
                        <select className='select select-bordered w-[49%] text-[#9A9696]'>
                            <option disabled selected>Número de funcionários...</option>
                            <option className='text-black'>1-10</option>
                            <option className='text-black'>11-30</option>
                            <option className='text-black'>31-50</option>
                            <option className='text-black'>51-100</option>
                            <option className='text-black'>101 ou mais</option>
                        </select>
                    </div>
                    <div className='card-actions justify-between'>
                        <Button content='Voltar' color='secondary' onClick={() => console.log()} />
                        <Button content='Avançar' onClick={() => console.log()} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StepThree
