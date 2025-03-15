import { Link } from "react-router-dom"

const Deal = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="bg-[url(/public/assets/collection/hero_bg_1.jpg)] bg-cover bg-center h-screen bg-fixed flex items-center">

                    <div className="flex flex-col gap-3 bg-white rounded-md p-4 w-1/2 my-auto mx-10">
                        <span className="font-bold text-gray text-xl">Limited Offers 20% OFF</span>
                        <h2 className="text-dark font-medium text-lg">Week Deal</h2>
                        <p className="text-gray text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                        <Link to="/products" className="w-fit bg-dark text-white rounded-sm p-2">Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Deal