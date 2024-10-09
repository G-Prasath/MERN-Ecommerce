import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing Order Using COD
const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod : "COD",
            payment : false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId, {cartData : {}}) // Clear cart data
        res.json({success: true, message: "Order Placed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}

// Placing Order Using Stripe
const placeOrderStripe = async (req, res) => {

}

// Placing Order Using Razorpay
const placeOrderRazorpay  = async (req, res) => {

}

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success: true, orders})
    } catch (error) {
       console.log(error);
       res.json({success: false, message: error.message})        
    }
}

// user Order data for frontend
const userOrders = async (req, res) => {
    try {
        const {userId} = req.body;
        const orders = await orderModel.find({userId});
        res.json({success: true, orders});
    } catch (error) {
        res.json({success: false,  message: error.message})
    }
}

// update order status
const updateStatus = async (req, res) => {
    try {
        const {orderId,  status} = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true,  message: "Order Status Updated"})
    } catch (error) {
        res.json({success: false, message:error.message})
    }
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus};