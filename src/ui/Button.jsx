/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({children, disabled,to, type}) {
  const  base="bg-yellow-400 text-sm font-semibold uppercase text-stone-800 px-4 py-3 tracking-wide inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2disabled:cursor-not-allowed";
   
const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:"border-2 text-sm border-stone-500 font-semibold uppercase text-stone-500 px-4 py-2 tracking-wide inline-block rounded-full hover:bg-stone-400 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3",
};
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>
    return (
        <button disabled={disabled} className={styles[type]}>
            {children} 
        </button>
    )
}

export default Button;