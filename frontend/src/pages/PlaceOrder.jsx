import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate, backendUrl, token, cartItem, setCartItem, getCartAmount, delivery_fee, products} = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData(data => ({...data, [name]:value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let orderItems = []
      for(const items in cartItem){
        for(const item in  cartItem[items]){
          if(cartItem[items][item] > 0){
            const itemInfo = structuredClone(products.find(products.find(product => product._id === item)))
            console.log(itemInfo);
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItem[items][item]
              orderItems.push(itemInfo)
            }
            
          }
        }

      }
      let orderData = {
        address : formData,
        items : orderItems,
        amount : getCartAmount() + delivery_fee
      }

      switch(method){
        // API Call for COD
        case 'COD':
          const response = await axios.post(backendUrl + "/api/order/place", orderData, {headers: {token}});
          if(response.data.success){
            setCartItem({})
            navigate("/orders")
          }else{
            toast.error(response.data.message)
          }


      }
    } catch (error) {
      
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 min-h-[80vh] border-t'>
      {/* Left Side  */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className='text-xl sm:text-2xl my-3'>
          <Title title1={`Delivery`} title2={`information`} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='First Name' autoComplete='off' />
          <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Last Name' autoComplete='off' />
        </div>
        <input required onChange={onChangeHandler} name="email" value={formData.email} type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Email Address' autoComplete='off' />
        <input required onChange={onChangeHandler} name="street" value={formData.street} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Street Address' autoComplete='off' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name="city" value={formData.city} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='City' autoComplete='off' />
          <input required onChange={onChangeHandler} name="state" value={formData.state} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='State' autoComplete='off' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name="zipCode" value={formData.zipCode} type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Zip Code' autoComplete='off' />
          <input required onChange={onChangeHandler} name="country" value={formData.country} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Country' autoComplete='off' />
        </div>
        <input onChange={onChangeHandler} name="phone" value={formData.phone} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Phone' autoComplete='off' />
      </div>

      {/* Right Side  */}
      <div className='mt-8'>
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title title1={`Payment`} title2={`Method`} />
          {/* Payment Method Selections  */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="Payment Logo" />
            </div>
            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="Payment Logo" />
            </div>
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='uppercase text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='text-white bg-black px-16 py-3 text-sm uppercase hover:bg-[#1b1b1b]'>Place order</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
