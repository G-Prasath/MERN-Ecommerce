import React, { useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const {token, setToken, bakendUrl} = useState(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if(currentState === 'Sign Up'){
        const response = await axios.post(bakendUrl + '/api/user/register', {name, email, password});
        console.log(response.data);
        
      }else{

      }
    } catch (error) {
      console.log(error.messages);
      
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl '>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' autoComplete='off' required />}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email Address' autoComplete='off' required />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' autoComplete='off' required />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password</p>
        {
          currentState === 'Login' ? <p onClick={() => setCurrentState('Signup')} className='cursor-pointer'>Create new account</p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login here</p>
        }
      </div>

      <button  className='bg-black text-white font-light px-8 py-2 mt-2'>{currentState === 'Login' ? 'Login' : 'sign up'}</button>

    </form>
  )
}

export default Login
