import { useGetUserQuery } from "@/lib/react-query/UserQuery";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectRoutes = () => {
    const { data: user, isPending, isError } = useGetUserQuery();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isPending && (!user || isError)) {
            navigate("/login", { replace: true });
        }
    }, [user, isPending, isError, navigate]);

    return user ? <Outlet /> : null;
};

export default ProtectRoutes;
