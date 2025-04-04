import { Outlet } from "react-router-dom";
import { imgs } from "@/constant";
const AuthLayout = () => {
    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-dark">
                <Outlet />
                <img src={imgs.authBg} alt="auth-bg" className="w-full h-screen object-cover" loading="lazy" draggable={false} />
            </div>
        </main>
    )
}

export default AuthLayout