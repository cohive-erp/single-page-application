import React from 'react'

type AvatarProps = {
    name: string
}

function Avatar(props: AvatarProps) {
    const { name } = props

    const initial = name.slice(0, 1)
    return (
        <div className='dropdown dropdown-bottom'>
            <div className='avatar placeholder' tabIndex={0} role='button'>
                <div className='bg-neutral text-neutral-content rounded-full w-16'>
                    <span className='text-2xl'>{initial.toUpperCase()}</span>
                </div>
            </div>
            <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
                <li><button>Abrir Perfil</button></li>
                <li><button>Logout</button></li>
            </ul>
        </div>
    )
}

export default Avatar
