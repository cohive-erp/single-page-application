import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
type AvatarProps = {
    name: string
}

function Avatar(props: AvatarProps) {
    const { name } = props
    const { t } = useTranslation()
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)

    const initial = name.slice(0, 1)

    const handleOpenModal = async () => {
        setOpen(open)
    }

    const handleLogout = async () => {
        sessionStorage.clear()
        navigate('/login')
        toast.success(t('LogoutSuccess'))
    }

    return (
        <div className='dropdown dropdown-bottom dropdown-end'>
            <div className='avatar placeholder' tabIndex={0} role='button'>
                <div className='bg-neutral text-neutral-content rounded-full w-16'>
                    <span className='text-2xl'>{initial.toUpperCase()}</span>
                </div>
            </div>
            <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-slate-100 text-black'>
                <li>
                    <button onClick={handleOpenModal}>
                        <PersonIcon fontSize='small' />
                        {t('OpenProfile')}
                    </button>
                </li>
                <li>
                    <button onClick={handleLogout}>
                        <LogoutIcon fontSize='small' />
                        {t('Logout')}
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Avatar
