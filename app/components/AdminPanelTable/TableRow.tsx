import { HTMLAttributes, useEffect } from "react"
import Table from "./Table"

interface TableLineProps extends HTMLAttributes<HTMLTableRowElement> {
    rowContent: string[]
}

export default function TableRow({ rowContent, ...props }: TableLineProps) {

    console.log(rowContent)
    return (
        <tr className="border-b border-x border-gray-200 hover:bg-gray-100" {...props}>
            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <span className="font-medium">
                        {rowContent[0]}
                    </span>
                </div>
            </td>
            {
                rowContent.map((content, index) => {
                    if (index == 0) return
                    return <Table.cell content={rowContent[index]} key={content+index} />
                })
            }
            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <i className="fas fa-edit">
                        </i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                        <i className="fas fa-trash-alt">
                        </i>
                    </button>
                </div>
            </td>
        </tr>
    )
}