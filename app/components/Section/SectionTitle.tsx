import { HTMLAttributes } from "react";

interface SectionTitleProps extends HTMLAttributes<HTMLElement> {
    title: string;
}

export function SectionTitle({ title, ...props }: SectionTitleProps) {
    return (
        <h2 className="text-lg mb-2" {...props}>
            {title}
        </h2>
    )
} 