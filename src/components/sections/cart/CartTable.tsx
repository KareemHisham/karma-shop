import { Link } from "react-router-dom";
import { Loader } from "@/components";
import { ICartItemsWithProduct } from "@/constant/Interfaces";
import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";

const CartTable = ({ cartItems, handleDeleteItem, deleteItemPending, clearCart, clearCartPending }: { cartItems: ICartItemsWithProduct[], handleDeleteItem: (id: number) => void, deleteItemPending: boolean, clearCart: () => void, clearCartPending: boolean }) => {

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
                    (cartItems as unknown as ICartItemsWithProduct[]).map((item) => {
                        return (
                            <div key={item.products.id} className="table-row">
                                <div className="table-cell">
                                    <img src={item.products.images[0]} alt="cart" width={80} className="inline-block mr-1" />
                                    <span className="text-lightGrey text-xs">{item.products.title}</span>
                                </div>
                                <div className="table-cell text-lightGrey text-xs">$ {item.products.price}</div>
                                <div className="table-cell">
                                    <span className="border-lightGrey border rounded-md py-1 px-2">{item.quantity}</span>
                                </div>
                                <div className="table-cell text-xs">$ {item.quantity * item.products.price}</div>
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
            <div className="mt-5 flex items-center gap-2">
                <Button type="button" className="bg-transparent text-sm text-lightGrey border-primary border transition-all duration-300 hover:bg-primary hover:text-white" onClick={clearCart} disabled={clearCartPending}>
                    {clearCartPending && <Loader />}
                    Clear Cart</Button>
                <Link to="/" className="py-2 px-4 rounded-md text-sm font-medium bg-transparent text-lightGrey border-primary border transition-all duration-300 hover:bg-primary hover:text-white">Continue Shopping</Link>
            </div>
            <div className="mt-5">
                <h2 className="text-2xl font-bold text-gray">Cart Total</h2>
                <ul>
                    <li>
                        <span>
                            Total
                        </span>
                        <span>$ {cartItems.reduce((acc, item) => acc + item.quantity * item.products.price, 0)}</span>
                    </li>
                    <li>
                        <span>Items</span>
                        <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                    </li>
                </ul>
                <Button className="bg-transparent text-sm text-lightGrey border-primary border transition-all duration-300 hover:bg-primary hover:text-white">Checkout</Button>
            </div>
        </>
    )
}

export default CartTable