import { imgs } from "@/constant"

const EmptySection = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={imgs.emptyCart} alt="empty cart" width="400" loading="lazy" draggable={false} />
        </div>
    )
}

export default EmptySection