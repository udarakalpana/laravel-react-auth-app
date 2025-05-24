import React from "react";
import Navbar from "../common/navbar/Navbar.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store.tsx";
import DeleteSvg from "../common/svg/DeleteSvg.tsx";

const ShoppingCart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-10">
                {cartItems.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between py-4"
                            >
                                <div className="flex items-center">
                                    {/*{item.image && (*/}
                                    {/*  <img*/}
                                    {/*    src={item.image}*/}
                                    {/*    alt={item.product_name}*/}
                                    {/*    className="h-16 w-16 object-cover rounded mr-4"*/}
                                    {/*  />*/}
                                    {/*)}*/}
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            {item.product_name}
                                        </h3>
                                        <p className="text-gray-500">
                                            ${item.product_price}
                                        </p>
                                        <p className="text-gray-700">
                                            Qty: {item.product_qty}
                                        </p>
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
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">
                        Your cart is empty.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
