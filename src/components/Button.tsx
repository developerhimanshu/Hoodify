import clsx from 'clsx'
import { ReactNode } from 'react'

type Size = "small"|"large"

const sizes:Record<Size, string>={
    "large":"py-5 px-20  rounded-[18px] bg-violet-blue hover:bg-periwinkle hover:text-raisin-black duration-300 transition-all text-white uppercase text-[16px] leading-[24px] body-semibold",
    "small":"px-[18px] py-5 rounded-[18px] bg-violet-blue hover:bg-periwinkle hover:text-raisin-black duration-300 transition-all text-white  uppercase text-[16px] leading-[24px] body-semibold"
}

type ButtonProps ={
    children?: ReactNode| ReactNode[],
    size?:Size,
    disabled?:boolean,
} & JSX.IntrinsicElements["button"]

const Button = ({
    children,
     size="small",
     disabled,
     className,
     ...props
    }:ButtonProps) => {
  return (
    <button className={clsx(sizes[size], {
        "bg-silver cursor-not-allowed":disabled
    }, className)}
    disabled={disabled}
    {...props}
    >{children}</button>
  )
}

export default Button