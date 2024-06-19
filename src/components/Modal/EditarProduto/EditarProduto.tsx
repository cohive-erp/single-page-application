/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Button from '../../Button/Button.tsx'
import Paragraph from '../../Paragraph/Paragraph.tsx'
import clsx from 'clsx'
import getProductById from '../../../lib/services/Get/get-product-by-id.ts'
import updateProduct from '../../../lib/services/Update/update-product-by-id.ts'
import { toast } from 'react-toastify'
import { UpdateProductCommand } from '../../../lib/types/update-product-command.ts'

type EditarProdutoProps = {
    id: number
    handleOpenEditarProduto: (id: number) => Promise<void>
}

function EditarProduto(props: EditarProdutoProps) {
    const { id, handleOpenEditarProduto } = props

    const [nome, setNome] = useState<string>('')
    const [quantidade, setQuantidade] = useState<number>()
    const [precoVenda, setPrecoVenda] = useState<number>()
    const [precoCompra, setPrecoCompra] = useState<number>()
    const [categoria, setCategoria] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [fabricante, setFabricante] = useState<string>('')

    const token = sessionStorage.getItem('sessionToken')

    const handleGetProductByID = async () => {
        console.log(id)
        await getProductById(id, token)
            .then((response) => {
                setNome(response.nome)
                setQuantidade(response.quantidade)
                setPrecoVenda(response.precoVenda)
                setPrecoCompra(response.precoCompra)
                setCategoria(response.categoria)
                setDescricao(response.descricao ?? '')
                setFabricante(response.fabricante)
            })
            .catch((e) => {
                console.error('Erro ao tentar se cadastrar', e)
            })
    }

    useEffect(() => {
        handleGetProductByID()
    }, [])

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    }

    const handleUpdate = async () => {
        const data: UpdateProductCommand = {
            id,
            nome,
            categoria,
            fabricante,
            descricao,
            precoVenda,
            precoCompra,
            quantidade
        }

        await updateProduct(id, data, token)
            .then(() => {
                sessionStorage.setItem('valores', JSON.stringify(data))
                handleOpenEditarProduto(id)
                toast.success('Produto alterado com sucesso!')
            })
            .catch((e) => {
                toast.error('Erro ao tentar alterar produto!')
                console.error('Erro ao tentar alterar produto', e)
            })
    }

    const className = 'border-purple-500 shadow-md text-[#9A9696] flex items-center bg-white'

    return (
        <div className='card w-[570px] h-[582px] shadow-xl bg-white'>
            <div className='card-body justify-between gap-4'>
                <Paragraph size='h2'>Editar produto</Paragraph>

                <div className='flex flex-col gap-2'>
                    <Paragraph size='h3-regular'>Nome*</Paragraph>
                    <label className={clsx('input input-bordered', className)}>
                        <input type='text' className='grow text-black' placeholder='Ex: Tapete' value={nome} onChange={(e) => handleInputChange(e, setNome)} />
                    </label>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row w-full justify-start'>
                        <Paragraph size='h3-regular'>Preço Venda*</Paragraph>
                        <Paragraph size='h3-regular'>Preço Compra*</Paragraph>
                    </div>
                    <div className='flex flex-row w-full justify-between'>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Preço unitário' value={precoVenda} onChange={(e) => handleInputChange(e, setPrecoVenda)} />
                            R$
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Preço da compra' value={precoCompra} onChange={(e) => handleInputChange(e, setPrecoCompra)} />
                            R$
                        </label>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row w-full justify-start'>
                        <Paragraph size='h3-regular'>Quantidade*</Paragraph>
                        <Paragraph size='h3-regular'>Categoria*</Paragraph>
                    </div>
                    <div className='flex flex-row w-full justify-between'>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Quantidade do produto' value={quantidade} onChange={(e) => handleInputChange(e, setQuantidade)} />
                            Qtd.
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Ex: Cama' value={categoria} onChange={(e) => handleInputChange(e, setCategoria)} />
                        </label>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row w-full justify-start'>
                        <Paragraph size='h3-regular'>Fabricante</Paragraph>
                        <Paragraph size='h3-regular'>Descrição</Paragraph>
                    </div>
                    <div className='flex flex-row w-full justify-between'>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Nome do Fornecedor' value={fabricante} onChange={(e) => handleInputChange(e, setFabricante)} />
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Resumo do produto' value={descricao} onChange={(e) => handleInputChange(e, setDescricao)} />
                        </label>
                    </div>
                </div>

                <div className='card-actions justify-between mt-5'>
                    <Button content='Salvar' className='w-[40%] shadow-sm' onClick={handleUpdate} />
                    <Button content='Cancelar' className='w-[40%] shadow-sm' color='secondary' onClick={() => handleOpenEditarProduto(id)} />
                </div>
            </div>
        </div>
    )
}

export default EditarProduto
