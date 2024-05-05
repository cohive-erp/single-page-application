import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'

type AvatarProps = {
    name: string
}

function Avatar(props: AvatarProps) {
    const { name } = props

    const initial = name.slice(0, 1)
    return (
        <div className='dropdown dropdown-bottom dropdown-end'>
            <div className='avatar placeholder' tabIndex={0} role='button'>
                <div className='bg-neutral text-neutral-content rounded-full w-16'>
                    <span className='text-2xl'>{initial.toUpperCase()}</span>
                </div>
            </div>
            <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
                <li>
                    <button>
                        <PersonIcon fontSize='small' />
                        Abrir Perfil
                    </button>
                </li>
                <li>
                    <button>
                        <LogoutIcon fontSize='small' />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Avatar