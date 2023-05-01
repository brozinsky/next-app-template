import {Link} from "react-router-dom";
import {cva} from "class-variance-authority";

const linkStyles = cva("text-primary-500", {
    variants: {
        decoration: {
            underline: ["text-inherit", "dark:text-primary-300"],
        },
    },
});

function CustomLink({children, to}) {
    const decoration = "underline";
    return (
        <Link to={to} className={linkStyles({decoration})}>
            {children}
        </Link>
    );
}

export default CustomLink;
