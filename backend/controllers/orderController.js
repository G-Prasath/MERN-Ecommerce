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
            payment : falsec,
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

}

// user Order data for frontend
const userOrders = async (req, res) => {

}

// update order status
const updateStatus = (req, res) => {

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus};