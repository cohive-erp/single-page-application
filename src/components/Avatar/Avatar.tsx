import React from 'react'

type AvatarProps = {initial: string}

function Avatar(props: AvatarProps) {
    const {initial} = props;
    return (
        <div className="dropdown dropdown-bottom">
            <div className="avatar placeholder" tabIndex={0} role='button'>
                <div className="bg-neutral text-neutral-content rounded-full w-16">
                    <span className="text-xl">{initial.toUpperCase()}</span>
                </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Abrir Perfil</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>

    )
}

export default Avatar
