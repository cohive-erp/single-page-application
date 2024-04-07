import React from 'react'
import clsx from 'clsx'

type StepProps = {
  step?: number
}

function Step(props: StepProps) {
  const first = props.step === 1
  const second = props.step === 2
  const third = props.step === 3
  const fourth = props.step === 4

  return (
    <ul className='steps w-full'>
      <li className={clsx(
        'step',
        { 'step-primary': first || second || third || fourth }
      )}>
        Registro
      </li>
      <li className={clsx(
        'step',
        { 'step-primary': second || third || fourth }
      )}>
        Dados pessoais
      </li>
      <li className={clsx(
        'step',
        { 'step-primary': third || fourth }
      )}>
        Dados da loja
      </li>
      <li className={clsx(
        'step',
        { 'step-primary': fourth }
      )}>
        Validação
      </li>
    </ul >
  )
}

export default Step
