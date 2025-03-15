import { OURFEATURES } from "@/constant"

const Features = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="grid grid-cols-3 space-x-5">
                    {OURFEATURES.map(feature => {
                        return (
                            <div className="flex flex-col items-center justify-center gap-2 shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] py-3 rounded-lg" key={feature.id}>
                                <img src={feature.img} alt="Karma Features" loading="lazy" width={40} />
                                <h3 className="text-dark font-bold">{feature.title}</h3>
                                <p className="text-gray">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features