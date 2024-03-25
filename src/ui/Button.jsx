/* eslint-disable react/prop-types */
function Button({children, disabled}) {
    return (
        <button disabled={disabled} className="bg-yellow-400 font-semibold uppercase
        text-stone-800 px-4 py-3 
       tracking-wide inline-block rounded-full
        hover:bg-yellow-300 transition-colors duration-300 
        focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
        disabled:cursor-not-allowed sm:px-6 sm:py-4">
            {children}
        </button>
    )
}

export default Button;