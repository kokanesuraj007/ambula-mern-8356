import { createContext, useState } from "react";
import notification from "../toast/index";

const URL = "https://fakestoreapi.com/products";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const initialData = JSON.parse(localStorage.getItem("cart")) || [];
  let initialTotalPrice = 0;
  initialData?.forEach((ele) => {
    initialTotalPrice += ele.price;
  });
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState(initialData);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

  const getTotalCartPrice = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let price = 0;
    cart?.forEach((ele) => {
      price += Number(ele.price);
    });
    setTotalPrice(price);
  };
  const getProductData = async () => {
    try {
      let res = await fetch(URL);
      let data = await res.json();
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (data) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let flag = true;
    cart?.forEach((ele) => {
      if (ele.title == data.title) {
        flag = false;
        notification("error", "This product already in cart");
        return;
      }
    });
    if (flag) {
      cart.push(data);
      setCartData(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      getTotalCartPrice();
      notification("success", "Add To Cart Successfully!");
    }
  };

  const deleteCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let newCart = cart?.filter((ele) => {
      return ele.id !== id;
    });
    setCartData(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    getTotalCartPrice();
    notification("success", "Deleted Successfully!");
  };

  return (
    <ProductContext.Provider
      value={{
        productData,
        getProductData,
        addToCart,
        cartData,
        deleteCart,
        totalPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
