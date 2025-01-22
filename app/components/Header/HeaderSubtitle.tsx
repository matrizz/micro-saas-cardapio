import { FC } from "react"

interface HeaderSubTitleProps {
    subTitle: string
}

export const HeaderSubtitle: FC<HeaderSubTitleProps> = ({ subTitle }) => {
    return (
        <p className="text-gray-600">
            {subTitle}
        </p>
    )
}