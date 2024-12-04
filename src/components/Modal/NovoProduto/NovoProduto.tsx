import React, { useState } from 'react'
import useClient from '../../../lib/client/useClient'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import { type CreateProductCommand } from '../../../lib/types/create-product-command'

type NovoProdutoProps = {
    handleOpenNewProduct: () => void
}

function NovoProduto(props: NovoProdutoProps) {
    const { handleOpenNewProduct } = props
    const client = useClient()
    const { t } = useTranslation()

    const [name, setName] = useState<string>('')
    const [quantity, setQuantity] = useState<number>()
    const [purchasePrice, setPurchasePrice] = useState<number>()
    const [sellingPrice, setSellingPrice] = useState<number>()
    const [category, setCategory] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [supplier, setSupplier] = useState<string>('')

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    }

    const handleCreateProduct = async () => {
        const data: CreateProductCommand = {
            nome: name,
            fabricante: supplier,
            categoria: category,
            precoVenda: sellingPrice,
            precoCompra: purchasePrice,
            descricao: description,
            quantidade: quantity,
            loja: JSON.parse(sessionStorage.getItem('userData') ?? '').loja
        }

        client.createProduct(data).then(() => {
            toast.success(t('CreateProductSuccess'))
            handleOpenNewProduct()
        }).catch(e => {
            toast.error(t('CreateProductError'))
            console.error(t('CreateProductError'), e)
        })
    }

    const className = 'border-purple-500 shadow-md text-[#9A9696] flex items-center bg-white'

    return (
        <div className='card w-[570px] h-[582px] bg-white shadow-xl'>
            <div className='card-body justify-between gap-4'>
                <Paragraph size='h2'>{t('NewProduct')}</Paragraph>

                <div className='flex flex-col gap-2'>
                    <Paragraph size='h3-regular'>
                        {t('NameProduct')}*
                    </Paragraph>
                    <label className={clsx('input input-bordered', className)}>
                        <input
                            className='grow text-black'
                            placeholder={t('ProductNameExample')}
                            value={name}
                            onChange={(e) => handleInputChange(e, setName)}
                        />
                    </label>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row w-full justify-start'>
                        <Paragraph size='h3-regular'>
                            {t('SellingPrice')}*
                        </Paragraph>
                        <Paragraph size='h3-regular'>
                            {t('PurchasePrice')}*
                        </Paragraph>
                    </div>
                    <div className='flex flex-row w-full justify-between'>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input
                                type='number'
                                className='grow text-black'
                                placeholder={t('UnitPrice')}
                                value={sellingPrice}
                                onChange={(e) => handleInputChange(e, setSellingPrice)}
                            />
                            {t('BRLCurrency')}
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input
                                type='number'
                                className='grow text-black'
                                placeholder={t('PurchasePrice')}
                                value={purchasePrice}
                                onChange={(e) => handleInputChange(e, setPurchasePrice)}
                            />
                            {t('BRLCurrency')}
                        </label>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row w-full justify-start'>
                        <Paragraph size='h3-regular'>
                            {t('Quantity')}*
                        </Paragraph>
                        <Paragraph size='h3-regular'>
                            {t('Category')}*
                        </Paragraph>
                    </div>
                    <div className='flex flex-row w-full justify-between'>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input
                                type='number'
                                className='grow text-black'
                                placeholder={t('QuantityExample')}
                                value={quantity}
                                onChange={(e) => handleInputChange(e, setQuantity)}
                            />
                            {t('QuantityAcronym')}
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input
                                className='grow text-black'
                                placeholder={t('CategoryExample')}
                                value={category}
                                onChange={(e) => handleInputChange(e, setCategory)}
                            />
                        </label>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row w-full justify-start'>
                        <Paragraph size='h3-regular'>
                            {t('Supplier')}
                        </Paragraph>
                        <Paragraph size='h3-regular'>
                            {t('Description')}
                        </Paragraph>
                    </div>
                    <div className='flex flex-row w-full justify-between'>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input
                                className='grow text-black'
                                placeholder={t('SupplierExample')}
                                value={supplier}
                                onChange={(e) => handleInputChange(e, setSupplier)}
                            />
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input
                                className='grow text-black'
                                placeholder={t('ProductSummaryExample')}
                                value={description}
                                onChange={(e) => handleInputChange(e, setDescription)}
                            />
                        </label>
                    </div>
                </div>

                <div className='card-actions justify-between mt-5'>
                    <Button content={t('Add')} className='w-[40%] shadow-sm' onClick={handleCreateProduct} />
                    <Button content={t('Cancel')} className='w-[40%] shadow-sm' color='secondary' onClick={handleOpenNewProduct} />
                </div>
            </div>
        </div>
    )
}

export default NovoProduto
