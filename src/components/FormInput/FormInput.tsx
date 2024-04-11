import React, { ReactNode } from 'react'
import Paragraph from '../Paragraph/Paragraph'
import clsx from 'clsx'

type FormInputProps = {
  icon?: ReactNode
  children?: ReactNode
  placeholder?: string
  typeComponent?: string
  typeInput?: string
  className?: string
  onChange?: () => void
}

function FormInput(props: FormInputProps) {
  const {
    icon,
    placeholder,
    typeInput,
    typeComponent = 'input',
    children,
    className
  } = props

  return (
    <>
      {typeComponent === 'input' &&
        <label className={clsx(
          'input input-bordered text-[#9A9696] flex items-center gap-2',
          className
        )}>
          {icon}
          <input type={typeInput ?? 'text'} className='grow text-black' placeholder={placeholder} />
        </label>
      }

      {typeComponent === 'checkbox' &&
        <label className='cursor-pointer flex items-center gap-2'>
          <input type='checkbox' defaultChecked className='checkbox checkbox-sm' />
          <Paragraph size='h7'>
            {children}
          </Paragraph>
        </label>
      }
    </>
  )
}

export default FormInput
