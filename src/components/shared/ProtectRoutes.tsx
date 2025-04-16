import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseGetCurrentUser } from "@/lib/react-query/UserQuery";

const ProtectRoutes = ({ children }: { children: React.ReactNode }) => {
    const { data: user } = UseGetCurrentUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user, navigate])

    return user ? children : null;
}

export default ProtectRoutes