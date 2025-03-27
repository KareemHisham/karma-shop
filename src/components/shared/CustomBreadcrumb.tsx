import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { IBreadcrum } from "@/constant/Interfaces"
import { FaAnglesRight } from "react-icons/fa6";

const CustomBreadcrumb = ({ breadcrumLinks }: IBreadcrum) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumLinks.map((link, index) => {
                    return (
                        <div key={index}>
                            <BreadcrumbItem>

                                {link.path ? (
                                    <BreadcrumbLink to={link.path} className="flex items-center gap-1">
                                        <span className={`${link.path && " border-b-2 border-primary"} font-bold`}>{link.title}</span>
                                        {!link.path ? "" : <FaAnglesRight />}
                                    </BreadcrumbLink>

                                ) : (<span className="font-bold">{link.title}</span>)}
                            </BreadcrumbItem>
                        </div>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default CustomBreadcrumb