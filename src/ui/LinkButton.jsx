/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function LinkButton({children, to}) {
    const navigate = useNavigate();
    const className="text-sm text-blue-500 hover:text-red-400 hover:underline";

    if(to === '-1') return  <button  className={className} onClick={() => navigate(-1)}>{children}</button>
    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    )
}
  
export default LinkButton;
