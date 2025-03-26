import { Star } from "@/components/index";

const Rating = ({ rate }: { rate: number }) => {
    const totalStars = 5;
    const unfilled = rate > totalStars ? 0 : totalStars - rate;
    return (
        <div className="flex gap-1">
            {Array.from({ length: totalStars - unfilled }).map((_, i) => (
                <Star filled={true} key={i} />
            ))}
            {Array.from({ length: unfilled }).map((_, i) => (
                <Star filled={false} key={i} />
            ))}
        </div>
    )
}

export default Rating