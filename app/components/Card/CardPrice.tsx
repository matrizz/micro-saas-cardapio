import { HTMLAttributes } from "react"

interface CardPriceProps extends HTMLAttributes<HTMLDivElement>{
    price: number
}

export function CardPrice({ price, ...props }: CardPriceProps) {
    return (
        <span className="text-gray-800 font-bold mt-2 text-sm" {...props}>
            R$ {price}
        </span>
    )
}