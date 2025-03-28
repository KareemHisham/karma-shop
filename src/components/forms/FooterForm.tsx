import { Link } from 'react-router-dom'
import { IFooterForm } from '@/constant/Interfaces'

const FooterForm = ({ title, link, linkTitle }: IFooterForm) => {
    return (
        <div className="flex justify-center items-center gap-2 mt-10">
            <p className="text-white text-sm">{title}</p>
            <Link to={link} className="text-primary text-sm">{linkTitle}</Link>
        </div>
    )
}

export default FooterForm