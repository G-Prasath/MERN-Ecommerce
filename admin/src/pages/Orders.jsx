import React from 'react'
import {useState} from 'react'

const Orders = ({token}) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {

  }

  useEffect(() => {
    fetchAllOrders
  },[token])
  return (
    <div>
      
    </div>
  )
}

export default Orders
