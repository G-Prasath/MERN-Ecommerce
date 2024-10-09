import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

const Verify = () => {
    const {navigate, token, setCartItem, backendUrl} = useContext(ShopContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if(!token){
                return null
            }

            const response = await axios.post(backendUrl + "/api/order/verifyStripe", {success, orderId}, {headers: {token}});
            if(response.data.success){
                setCartItem({});
                navigate('/order')
            }else{
                navigate("/cart")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyPayment()
    },[token])
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <p className='text-xl text-slate-800'>verify</p>
    </div>
  )
}

export default Verify
