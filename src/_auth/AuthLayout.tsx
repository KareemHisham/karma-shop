import { Outlet, useNavigate } from "react-router-dom";
import { imgs } from "@/constant";
import { useEffect } from "react";
import { useGetUserQuery } from "@/lib/react-query/UserQuery";
const AuthLayout = () => {
    const { data: user } = useGetUserQuery();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) navigate("/", { replace: true });
    }, [user, navigate])
    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-dark h-screen md:w-full">
                <Outlet />
                <img src={imgs.authBg} alt="auth-bg" className="w-full h-screen object-cover hidden md:block" loading="lazy" draggable={false} />
            </div>
        </main>
    )
}

export default AuthLayout