import React, {useState} from 'react';

export const CartContext = React.createContext({});

export const CartProvider = ({ defaultValue = false, children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        var itemFound = items.find(itemState => itemState.item.id === item.item.id)
        if(itemFound){
            setItems(items.map((itemState) => {
                if (itemState.item.id === item.item.id){
                    itemState.quantity = itemState.quantity + item.quantity;
                } 
                return itemState;
            }))
        } else {
            const newItems = [...items, item];
            setItems([...items, item]);
            setItems(newItems);
        }

    };

    const clear = () => setItems([]);

    const removeItem = (id) => {
        const newItems = items.filter((item) => item.item.id !== id);
        setItems(newItems)
    }

    return (
        <CartContext.Provider value={{addItem, clear, removeItem, items}}>
            {children}
        </CartContext.Provider>
    )
}