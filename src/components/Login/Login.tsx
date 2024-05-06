import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import KeyIcon from '@mui/icons-material/Key'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'

function Login() {
  return (
    <div className='flex flex-col font-poppins justify-between gap-8'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <Paragraph size='h1'>Bem-vindo(a) de volta!</Paragraph>
        <Paragraph size='h3-regular'>Entre novamente para gerenciar seus produtos.</Paragraph>
      </div>
      <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
        <MailOutlineIcon fontSize='small' />
        <input type='email' className='grow text-black' placeholder='Email' />
      </label>
      <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
        <KeyIcon fontSize='small' />
        <input type='password' className='grow text-black' placeholder='Senha' />
      </label>
      <div className='flex flex-col items-center'>
        <Button content='Entrar' className='w-full' onClick={() => console.log()} />
        <Paragraph size='h6'>ou</Paragraph>
        <Button content='Entrar com o Google' color='white' className='w-full' onClick={() => console.log()} />
      </div>
    </div>
  )
}

export default Login

// import React from 'react'
// import Button from '../../Button/Button'
// import Paragraph from '../../Paragraph/Paragraph'

// function Login() {
//     return (
//         <div className='card w-[60%] h-[60%] bg-base-100 shadow-xl font-poppins'>
//             <div className='card-body justify-center'>
//                 <Paragraph size='h3'>Login</Paragraph>
//                 <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
//                     <input type='text' className='grow text-black' placeholder='Nome' />
//                 </label>
//                 <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
//                     <input type='text' className='grow text-black' placeholder='Senha' />
//                 </label>
//                 <div className='card-actions justify-between'>
//                     <Button content='Voltar' color='secondary' onClick={() => console.log()} />
//                     <Button content='Logar' onClick={() => console.log()} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login
