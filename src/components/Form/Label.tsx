

import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, } from "react"
import { FieldError } from "react-hook-form"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    error?: FieldError,
    title: string
}

const LabelBase: ForwardRefRenderFunction<HTMLInputElement, LabelProps> = (props, ref) => {
    return (
        <label {...props}
            className={`font-semibold ${!!props.error
                ? "text-red-300 border-red-400"
                : "text-white border-purple-400"
            }`}
        >   
            {props.title}
        </label>
      
    )
}

export const Label = forwardRef(LabelBase)