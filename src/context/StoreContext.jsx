import { createContext, useContext, useState } from "react";

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (p) => {
    if (!cart.find(i => i.id === p.id)) setCart([...cart, p]);
  };

  const addToWishlist = (p) => {
    if (!wishlist.find(i => i.id === p.id)) setWishlist([...wishlist, p]);
  };

  return (
    <StoreContext.Provider value={{ cart, wishlist, addToCart, addToWishlist }}>
      {children}
    </StoreContext.Provider>
  );
};
