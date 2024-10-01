import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProducts = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchList();
  }, []);

  console.log(list.length);

  return (
    <>
      <div className="flex flex-col gap-2">
        {
          list.length  > 0 
          ?         <>
          <p>All Products</p>
          {/* List Table Title  */}
          <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b className="text-center">Action</b>
          </div>
          </>
          : <p>Please Add Products</p>
        }


        {/* Product List  */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
          >
            <img className="w-12" src={item.image[0]} alt="Product Image" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p
              onClick={() => removeProducts(item._id)}
              className="text-right md:text-center cursor-pointer text-lg"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
