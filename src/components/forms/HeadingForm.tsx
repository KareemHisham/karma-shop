import { imgs } from "@/constant"
import { IHeadingForm } from "@/constant/Interfaces"

const HeadingForm = ({ title, subTitle }: IHeadingForm) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 mb-10">
            <img src={imgs.favIcon} alt="karma-logo" loading="lazy" draggable={false} width={50} className="object-cover" />
            <h1 className="text-white text-2xl font-bold">{title}</h1>
            <h1 className="text-white text-sm">
                <span>
                    {subTitle}
                </span>
            </h1>
        </div>
    )
}

export default HeadingForm
