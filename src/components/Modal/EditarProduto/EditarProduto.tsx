/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import useClient from '../../../lib/client/useClient'
import { UpdateProductCommand } from '../../../lib/types/update-product-command'
import { useTranslation } from 'react-i18next'

type EditarProdutoProps = {
    id: number
    handleOpenEditProduct: (id: number) => Promise<void>
}

function EditarProduto(props: EditarProdutoProps) {
    const { id, handleOpenEditProduct } = props

    const client = useClient()
    const { t } = useTranslation()

    const [name, setName] = useState<string>('')
    const [quantity, setQuantity] = useState<number>()
    const [purchasePrice, setPurchasePrice] = useState<number>()
    const [sellingPrice, setSellingPrice] = useState<number>()
    const [category, setCategory] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [supplier, setSupplier] = useState<string>('')

    useEffect(() => {
        client.getProductById(id).then((data) => {
            setName(data.produto.nome)
            setQuantity(data.quantidade ?? 0)
            setPurchasePrice(data.produto.precoCompra)
            setSellingPrice(data.produto.precoVenda)
            setCategory(data.produto.categoria)
            setDescription(data.produto.descricao ?? '')
            setSupplier(data.produto.fabricante)
        })
    }, [])

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    }

    const handleUpdateProduct = async () => {
        const data: UpdateProductCommand = {
            id,
            nome: name,
            fabricante: supplier,
            categoria: category,
            precoVenda: sellingPrice,
            precoCompra: purchasePrice,
            descricao: description,
            quantidade: quantity
        }

        client.updateProductById(id, data).then(() => {
            toast.success(t('CreateProductSuccess'))
            handleOpenEditProduct(id)
        }).catch(e => {
            toast.error(t('CreateProductError'))
            console.error(t('CreateProductError'), e)
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
                        <input type='text' className='grow text-black' placeholder='Ex: Tapete' value={name} onChange={(e) => handleInputChange(e, setName)} />
                    </label>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row w-full justify-start'>
                        <Paragraph size='h3-regular'>Preço Venda*</Paragraph>
                        <Paragraph size='h3-regular'>Preço Compra*</Paragraph>
                    </div>
                    <div className='flex flex-row w-full justify-between'>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Preço unitário' value={sellingPrice} onChange={(e) => handleInputChange(e, setSellingPrice)} />
                            R$
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Preço da compra' value={purchasePrice} onChange={(e) => handleInputChange(e, setPurchasePrice)} />
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
                            <input type='text' className='grow text-black' placeholder='Quantidade do produto' value={quantity} onChange={(e) => handleInputChange(e, setQuantity)} />
                            Qtd.
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Ex: Cama' value={category} onChange={(e) => handleInputChange(e, setCategory)} />
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
                            <input type='text' className='grow text-black' placeholder='Nome do Fornecedor' value={supplier} onChange={(e) => handleInputChange(e, setSupplier)} />
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input type='text' className='grow text-black' placeholder='Resumo do produto' value={description} onChange={(e) => handleInputChange(e, setDescription)} />
                        </label>
                    </div>
                </div>

                <div className='card-actions justify-between mt-5'>
                    <Button content='Salvar' className='w-[40%] shadow-sm' onClick={handleUpdateProduct} />
                    <Button content='Cancelar' className='w-[40%] shadow-sm' color='secondary' onClick={() => handleOpenEditProduct(id)} />
                </div>
            </div>
        </div>
    )
}

export default EditarProduto
