import { imgs } from "@/constant/index"
const BlackFriday = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="flex gap-4">
                    <div className="grid grid-cols-3 gap-5 w-full">
                        <img src={imgs.c1} alt="Karama Product" className="h-[150px] col-span-2 hover:scale-105 transition-transform duration-300" width={"100%"} />
                        <img src={imgs.c2} alt="Karama Product" className="h-[150px]  hover:scale-105 transition-transform duration-300" width={"100%"} />
                        <img src={imgs.c3} alt="Karama Product" className="h-[150px] hover:scale-105 transition-transform duration-300" width={"100%"} />
                        <img src={imgs.c4} alt="Karama Product" className="h-[150px] col-span-2 hover:scale-105 transition-transform duration-300" width={"100%"} />
                    </div>
                    <div>
                        <img src={imgs.c5} alt="Karma Black friday" width={360} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlackFriday