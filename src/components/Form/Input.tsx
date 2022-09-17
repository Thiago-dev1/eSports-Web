import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
    return (
        <input 
            {...props}
            ref={ref}
            className='bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500'
        />
    )
}

export const Input = forwardRef(InputBase)