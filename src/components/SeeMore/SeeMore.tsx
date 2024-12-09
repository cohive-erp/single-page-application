import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import useClient from 'src/lib/client/useClient'

type SeeMoreProps = {
  id: number
  handleEdit: (id: number) => Promise<void>
}

function SeeMore(props: SeeMoreProps) {
  const { id, handleEdit } = props

  const client = useClient()
  const { t } = useTranslation()

  const handleToIncrease = async (id: number) => {
    try {
      const produto = await client.getProductById(id)
      const userData = JSON.parse(sessionStorage.getItem('userData') ?? '')
      const data = {
        dataEntradaInicial: new Date(),
        produto,
        loja: userData.loja,
        quantidade: 1
      }

      await client.toIncrease(data)
      toast.success(t('ToIncreaseSuccess'))
    } catch (e) {
      toast.error(t('ToIncreaseError'))
      console.error(t('ToIncreaseError'), e)
    }
  }

  const handleToDecrease = async (id: number) => {
    try {
      const produto = await client.getProductById(id)
      const userData = JSON.parse(sessionStorage.getItem('userData') ?? '')
      const data = {
        dataEntradaInicial: new Date(),
        produto,
        loja: userData.loja,
        quantidade: 1
      }

      await client.toDecrease(data)
      toast.success(t('ToIncreaseSuccess'))
    } catch (e) {
      toast.error(t('ToIncreaseError'))
      console.error(t('ToIncreaseError'), e)
    }
  }

  return (
    <div className='dropdown dropdown-bottom dropdown-end btn btn-circle btn-ghost btn-xs'>
      <MoreVertIcon className='placeholder' fontSize='small' tabIndex={0} role='button' />
      <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-slate-100 text-black'>
        <li>
          <button onClick={() => handleEdit(id)}>
            <EditIcon fontSize='small' />
            {t('Edit')}
          </button>
        </li>
        <li>
          <button onClick={() => handleToIncrease(id)}>
            <AddIcon fontSize='small' />
            {t('ToIncrease')}
          </button>
        </li>
        <li>
          <button onClick={() => handleToDecrease(id)}>
            <RemoveIcon fontSize='small' />
            {t('ToDecrease')}
          </button>
        </li>
      </ul>
    </div>
  )
}

export default SeeMore
