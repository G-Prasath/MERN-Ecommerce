import userModel from "../models/userModel.js";

// add product to user cart
const addCart = async (req, res) => {
    try {
        const {userId, itemId, size } = req.body;
        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }
            else{
                cartData[itemId] = {}
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, {cartData})
    } catch (error) {
        
    }
}

// update user cart
const updateCart = async (req, res) => {

}

// get user cart data
const getUserCart = async (req, res) => {

}

export {addCart, updateCart, getUserCart}