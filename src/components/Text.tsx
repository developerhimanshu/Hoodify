import clsx from "clsx";
import React from "react";

type Variant = "heading-one" | "heading-two" | "heading-three"|"heading-four"|"subheading-one" | "subheading-two" | "subheading-three"|"body-one"|"body-two" | "body-three" |"caption-one" |"caption-two" | "caption-three"|"caption-four";

type TextProps = {
    children: React.ReactNode|React.ReactNode[]
    variant: Variant
    className?: string
}

const variants: Record<Variant, string> = {
    "heading-one": "text-[50px] leading-[64px] text-rasin-black font-bold",
    "heading-two": "text-[40px] leading-[51px] text-rasin-black font-bold",
    "heading-three":"text-[32px] leading-[41px] text-rasin-black font-bold",
    "heading-four":"text-[24px] leading-[31px] text-rasin-black font-bold",
    "subheading-one":"text-[28px] leading-[42px] text-rasin-black font-semibold",
    "subheading-two":"text-[20px] leading-[30px] text-rasin-black font-semibold",
    "subheading-three":"text-[16px] leading-[24px] text-rasin-black font-semibold",
    "body-one":"text-[28px] leading-[42px] text-rasin-black",
    "body-two":"text-[20px] leading-[30px] text-rasin-black",
    "body-three":"text-[16px] leading-[24px] text-rasin-black",
    "caption-one":"uppercase text-[16px] leading-[24px] text-rasin-black",
    "caption-two":"uppercase text-[16px] leading-[24px] text-rasin-black font-semibold",
    "caption-three":"uppercase text-[16px] leading-[24px] text-rasin-black body-semibold",
    "caption-four":"uppercase text-[12px] leading-[18px] text-rasin-black",
}

const Text = ({children,
     variant="body-one", 
     className,
     ...props
    }:TextProps)=>{
    return(
        <p className={clsx(variants[variant], className)}
        {...props}
        >
            {children}
        </p>
    )
}

export default Text;