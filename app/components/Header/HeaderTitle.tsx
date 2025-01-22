import { ReactNode } from "react"

interface HeaderTitleBase {
    title?: string
    children?: ReactNode | string
}

type HeaderTitleProps =
    | { title: string; children?: never }
    | { children: ReactNode | string; title?: never }

export function HeaderTitle({ title, children }: HeaderTitleProps) {
    return (
        <h1 className="text-4xl font-bold text-gray-800">
            {children? children: title }
        </h1>
    )
}