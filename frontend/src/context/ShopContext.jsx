import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');

    const navigate = useNavigate();


    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItem);
    
        if (size) {            
            if (cartData[itemId]) {
                if (cartData[itemId][size]) {
                    cartData[itemId][size] += 1;
                }
                else {
                    cartData[itemId][size] = 1;
                }
            }
            else {
                cartData[itemId] = {};
                cartData[itemId][size] = 1;
            }

        }else{
            toast.error("Select Product Size");  
        }       
        setCartItem(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;        
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item] > 0){
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData)
    } 

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItem){
            let itemInfo = products.find((product) => product._id === items)
            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item] > 0){
                        totalAmount += itemInfo.price * cartItem[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const getProductData = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/product/list");
            if(response.data.success){
                setProducts(response.data.products);                  
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getProductData();
    },[])

    useEffect(() => {
        if(!token && localStorage.getItem('item')){
            setToken(localStorage.getItem('item'))
        }
    },[])
    

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        setCartItem, cartItem, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, 
        backendUrl, token, setToken
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;