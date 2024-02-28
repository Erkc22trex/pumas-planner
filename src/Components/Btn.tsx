import React from "react"

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
}

export default function Btn({children, ...props} : btnProps ){
    return(
        <button {...props} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-3">           
            {children}
        </button>
    )
}