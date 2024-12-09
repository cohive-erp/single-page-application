import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'
import clsx from 'clsx'

function ActionHistory() {
  const [actions, setActions] = useState<string[]>([])
  const [currentAction, setCurrentAction] = useState<string>('')

  useEffect(() => {
    const storedActions = sessionStorage.getItem('item')
    if (storedActions) {
      setActions(JSON.parse(storedActions))
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('item', JSON.stringify(actions))
  }, [actions])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAction(event.target.value)
  }

  const handlePerformAction = () => {
    if (currentAction) {
      setActions([...actions, currentAction])
      setCurrentAction('')
    }
  }

  const handleUndoAction = () => {
    setActions(actions.slice(0, -1))
  }

  const className = 'border-purple-500 shadow-md text-[#9A9696] flex items-center bg-white'

  return (
    <div className='card w-full h-full bg-slate-100 shadow-xl'>
      <div className='card-body justify-between gap-4'>
        <div className='flex flex-col gap-2'>
          <Paragraph size='h2'>📁 Gestão de produtos para reposição</Paragraph>

          <div className='flex flex-col gap-2'>
            <Paragraph size='h3-regular'>Nome do produto</Paragraph>
            <label className={clsx('input input-bordered', className)}>
              <input
                type='text'
                className='grow text-black'
                placeholder='Ex: Tapete'
                value={currentAction}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className='mt-5'>
            <Paragraph size='h3-regular'>Produtos para reposição:</Paragraph>
            <div className='p-2'>
              {actions.length ? (
                <ul>
                  {actions.map((action, index) => (
                    <li key={index} className='mb-1'>
                      {action}
                    </li>
                  ))}
                </ul>
              ) : (
                <Paragraph size='h2'>Nenhum produto.</Paragraph>
              )}
            </div>
          </div>
        </div>


        <div className='card-actions justify-between mt-5'>
          <Button content='Adicionar Produto' className='w-[40%] shadow-sm' onClick={handlePerformAction} />
          <Button content='Desfazer Produto' className='w-[40%] shadow-sm' color='secondary' onClick={handleUndoAction} />
        </div>
      </div>
    </div>
  )
}

export default ActionHistory
