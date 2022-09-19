import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, } from "react"
import { FieldError } from "react-hook-form"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
    
    return (
      <>
          <input 
            {...props}
            ref={ref}
            className={`bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500 ${!!props.error ? "border-2 border-red-600": ""}`}
        />

        {props.error?.message && (
            <p className="text-red-500 text-sm mt-2">
                {props.error?.message}
            </p>
        )}
      </>
    )
}

export const Input = forwardRef(InputBase)