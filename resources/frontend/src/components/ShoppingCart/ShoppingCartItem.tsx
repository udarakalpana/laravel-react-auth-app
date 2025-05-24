import React from "react";
import DeleteSvg from "../common/svg/DeleteSvg.tsx";
import { IShoppingCartItemProp } from "../../utilities/types/product/product";

const ShoppingCartItem: React.FC<IShoppingCartItemProp> = ({ item }) => {
    return (
        <li key={item.id} className="flex items-center justify-between py-4">
            <div className="flex items-center">
                {/*{item.image && (*/}
                {/*  <img*/}
                {/*    src={item.image}*/}
                {/*    alt={item.product_name}*/}
                {/*    className="h-16 w-16 object-cover rounded mr-4"*/}
                {/*  />*/}
                {/*)}*/}
                <div>
                    <h3 className="text-lg font-medium">{item.product_name}</h3>
                    <p className="text-gray-500">${item.product_price}</p>
                    <p className="text-gray-700">Qty: {item.quantity}</p>
                </div>
            </div>
            <button
                // onClick={() => dispatch(removeFromCart(item.id))}
                aria-label="Remove item"
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
                <DeleteSvg />
            </button>
        </li>
    );
};

export default ShoppingCartItem;
