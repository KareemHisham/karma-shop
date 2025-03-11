import { Link,  } from "react-router-dom";
import styles from "./style.module.css";

const { errorContainer, four, zero, screen_reader_text, backHome } = styles;
const Error = () => {
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
            {/* <p>{errorStatusText}</p> */}
            <p>erorr</p>
            <Link to="/" replace={true} className={backHome}>
                GO HOME
            </Link>
        </section>
    )
}

export default Error