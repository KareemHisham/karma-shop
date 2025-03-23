import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import styles from "./style.module.css";

const { errorContainer, four, zero, screen_reader_text, backHome } = styles;
const Error = () => {
    const error = useRouteError();
    console.log(error)
    let errorStatusText = "";
    if (isRouteErrorResponse(error)) {
        errorStatusText = error.statusText;
    }
    return (
        <section className={errorContainer}>
            <span className={four}>
                <span className={screen_reader_text}>4</span>
            </span>
            <span className={zero}>
                <span className={screen_reader_text}>0</span>
            </span>
            <span className={four}>
                <span className={screen_reader_text}>4</span>
            </span>
            <p>{errorStatusText}</p>
            <Link to="/" replace={true} className={backHome}>
                GO HOME
            </Link>
        </section>
    )
}

export default Error