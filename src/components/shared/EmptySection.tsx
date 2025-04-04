import { imgs } from "@/constant"

const EmptySection = ({ cart = false }: { cart: boolean }) => {
    return (
        <div className="flex justify-center items-center">
            <img src={cart ? imgs.emptyCart : imgs.emptyProduct} alt="empty cart" width={`${cart ? "400" : "300"}`} loading="lazy" draggable={false} />
        </div>
    )
}

export default EmptySection