import React from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = React.createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {}
});

function shoppingCartReducer(state,action){

  if(action.type === 'ADD'){
    const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.id);
        updatedItems.push({
          id: action.id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        ...state,
        items: updatedItems,
      };
    }

    if (action.type === 'UPDATE') {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    }

  return state;
}


export default function CartContextProvider({children}) {

  const [shoppingCartState, shoppingCartDispatch] = React.useReducer(shoppingCartReducer, {items: []})

  // const [shoppingCart, setShoppingCart] = React.useState({
  //   items: [],
  // });

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD',
      id: id
    })
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE',
      productId: productId,
      amount: amount,
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity
  }

  return (
    <CartContext.Provider value = {ctxValue}>
      {children}
    </CartContext.Provider>
  );

}
