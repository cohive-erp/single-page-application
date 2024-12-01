import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import clsx from 'clsx'
import { CreateProductCommand } from '../../../lib/types/create-product-command'
import useClient from '../../../lib/client/useClient'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

type NovoProdutoProps = {
    handleOpenNewProduct: () => void
}

function NovoProduto(props: NovoProdutoProps) {
    const { handleOpenNewProduct } = props
    const client = useClient()
    const { t } = useTranslation()

    const [nome, setNome] = useState<string>('')
    const [quantidade, setQuantidade] = useState<number>()
    const [precoCompra, setPrecoCompra] = useState<number>()
    const [precoVenda, setPrecoVenda] = useState<number>()
    const [categoria, setCategoria] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [fabricante, setFabricante] = useState<string>('')

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    }

    const handleCreateProduct = async () => {
        const data: CreateProductCommand = {
            nome,
            fabricante,
            categoria,
            precoVenda,
            precoCompra,
            descricao,
            loja: {
                idLoja: 1
            },
            quantidade
        }

        // await createProduct(data, token)
            // .then(() => {
            //     toast.success('Produto adicionado com sucesso!')
            //     handleOpenNovoProduto()
            // })
            // .catch((e) => {
            //     toast.error('Erro ao tentar adicionar produto!')
            //     console.error('Erro ao tentar adicionar produto', e)
            // })
    }

    const className = 'border-purple-500 shadow-md text-[#9A9696] flex items-center bg-white'

    return (
        <div className='card w-[570px] h-[582px] bg-white shadow-xl'>
            <div className='card-body justify-between gap-4'>
                <Paragraph size='h2'>{t('NewProduct')}</Paragraph>

                <div className='flex flex-col gap-2'>
                    <Paragraph size='h3-regular'>
                        {t('placeholder')}*
                    </Paragraph>
                    <label className={clsx('input input-bordered', className)}>
                        <input
                            type='text'
                            className='grow text-black'
                            placeholder='Ex: Tapete'
                            value={nome}
                            onChange={(e) => handleInputChange(e, setNome)}
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
                                type='text'
                                className='grow text-black'
                                placeholder={t('UnitPrice')}
                                value={precoVenda}
                                onChange={(e) => handleInputChange(e, setPrecoVenda)}
                            />
                            R$
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input
                                type='text'
                                className='grow text-black'
                                placeholder={t('PurchasePrice')}
                                value={precoCompra}
                                onChange={(e) => handleInputChange(e, setPrecoCompra)}
                            />
                            R$
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
                                type='text'
                                className='grow text-black'
                                placeholder='Quantidade do produto'
                                value={quantidade}
                                onChange={(e) => handleInputChange(e, setQuantidade)}
                            />
                            Qtd.
                        </label>
                        <label className={clsx('input input-bordered gap-2 w-[49%]', className)}>
                            <input
                                type='text'
                                className='grow text-black'
                                placeholder='Ex: Cama'
                                value={categoria}
                                onChange={(e) => handleInputChange(e, setCategoria)}
                            />
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
                    <Button content='Adicionar' className='w-[40%] shadow-sm' onClick={handleCreateProduct} />
                    <Button content='Cancelar' className='w-[40%] shadow-sm' color='secondary' onClick={handleOpenNewProduct} />
                </div>
            </div>
        </div>
    )
}

export default NovoProduto
