import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "@/components";
import { Input } from "@/components/ui/input"
import { ICartItems } from "@/constant/Interfaces";
import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useUpdateCartQuantityMutation } from "@/lib/react-query/CartQuery";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUpdateProductQuantityQuery } from "@/lib/react-query/ProductsQuery";
const CartTable = ({ cartItems, handleDeleteItem, deleteItemPending, clearCart, clearCartPending }: { cartItems: ICartItems[], handleDeleteItem: (id: number) => void, deleteItemPending: boolean, clearCart: () => void, clearCartPending: boolean }) => {
    const [quantities, setQuantities] = useState<{ [key: number]: number }>(
        cartItems.reduce((acc, item) => ({
            ...acc,
            [item.products.id]: item.quantity
        }), {})
    );

    const { mutate: updateCartQuantity, isPending } = useUpdateCartQuantityMutation();
    const { mutate: updateProductStock } = useUpdateProductQuantityQuery()
    const queryClient = useQueryClient()

    const handleChangeQuantity = (type: "increament" | "decreament", productId: number, currentQuantity: number) => {
        if (type === "increament") {
            setQuantities(prev => ({
                ...prev,
                [productId]: currentQuantity + 1
            }));
        } else {
            setQuantities(prev => ({
                ...prev,
                [productId]: currentQuantity - 1
            }));
        }
    }

    const handleUpdateCartQuantity = (productId: number, quantity: number) => {
        updateCartQuantity({ productID: productId, quantity }, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['cart'] })
                toast.success("Quantity updated to cart");
                updateProductStock({ id: productId, stock: quantity })
            }
        })
    }

    return (
        <>
            <div className="table basis-full md:basis-[70%]">
                <h1 className="text-2xl font-bold text-gray">Cart Items</h1>
                <div className="table-row bg-lightPink py-3">
                    <span className="table-cell font-medium">Product</span>
                    <span className="table-cell font-medium">Price</span>
                    <span className="table-cell font-medium">Quantity</span>
                    <span className="table-cell font-medium">Total</span>
                    <span className="table-cell font-medium">Action</span>
                </div>
                {
                    cartItems.map((item) => {
                        const currentQuantity = quantities[item.products.id] || item.quantity;
                        return (
                            <div key={item.products.id} className="table-row">
                                <div className="table-cell">
                                    <img src={item.products.images[0]} alt="cart" width={80} className="inline-block mr-1" />
                                    <span className="text-lightGrey text-xs">{item.products.title}</span>
                                </div>
                                <div className="table-cell text-lightGrey text-xs">$ {item.products.price}</div>
                                <div className="table-cell">
                                    <div className="flex items-center gap-2">
                                    {item.products.id}
                                        <Button
                                            type="button"
                                            onClick={() => handleChangeQuantity("decreament", item.products.id, currentQuantity)}
                                            disabled={currentQuantity <= 1}
                                            className={`${currentQuantity <= 0 ? "bg-red-700 text-white" : "bg-primary text-white"}`}
                                        >
                                            <FaMinus />
                                        </Button>

                                        <Input
                                            type="text"
                                            readOnly
                                            disabled
                                            className="w-12 flex items-center justify-center"
                                            value={currentQuantity}
                                        />

                                        <Button
                                            type="button"
                                            onClick={() => handleChangeQuantity("increament", item.products.id, currentQuantity)}
                                            disabled={currentQuantity >= (item.products.stock || 0)}
                                            className={`${currentQuantity >= (item.products.stock || 0) ? "bg-red-700 text-white" : "bg-primary text-white"}`}
                                        >
                                            <FaPlus />
                                        </Button>
                                    </div>
                                </div>
                                <div className="table-cell text-xs">$ {currentQuantity * item.products.price}</div>
                                <div className="table-cell">
                                    <Button type="button" className="text-white" onClick={() => handleDeleteItem(item.products.id)} disabled={deleteItemPending}>
                                        <FaTrash />
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col md:flex-row items-baseline">
                {/* Buttons */}
                <div className="mt-5 flex items-center gap-2 flex-1">
                    <Button type="button" className="bg-transparent text-sm text-lightGrey border-primary border transition-all duration-300 hover:bg-primary hover:text-white" onClick={clearCart} disabled={clearCartPending}>
                        {clearCartPending && <Loader />}
                        Clear Cart
                    </Button>
                    <Link to="/" className="py-2 px-4 rounded-md text-sm font-medium bg-transparent text-lightGrey border-primary border transition-all duration-300 hover:bg-primary hover:text-white">
                        Continue Shopping
                    </Link>
                </div>

                {/* Summary */}
                <div className="mt-5 flex-1">
                    <h2 className="text-2xl font-bold text-gray">Cart Total</h2>
                    <ul className="mb-4">
                        <li className="flex">
                            <span className="basis-1/2">Total</span>
                            <span className="basis-1/2">${cartItems.reduce((acc, item) => acc + (quantities[item.products.id] || item.quantity) * item.products.price, 0)}</span>
                        </li>
                        <li className="flex">
                            <span className="basis-1/2">Items</span>
                            <span className="basis-1/2">{cartItems.reduce((acc, item) => acc + (quantities[item.products.id] || item.quantity), 0)}</span>
                        </li>
                    </ul>
                    <Button className="py-2 px-4 rounded-md text-sm font-medium bg-transparent text-lightGrey border-primary border transition-all duration-300 hover:bg-primary hover:text-white" onClick={() => handleUpdateCartQuantity(cartItems[0].products.id, quantities[cartItems[0].products.id] || cartItems[0].quantity)} disabled={isPending}>
                        {isPending && <Loader />}
                        Checkout
                    </Button>
                </div>
            </div>

        </>
    )
}

export default CartTable