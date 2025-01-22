'use client'

import Table from "@/app/components/AdminPanelTable/Table"
import { CardapioSection, CardapioSectionItem } from "@/types"
import { useState, useEffect, useRef } from "react"

export default function Panel() {

    const [data, setData] = useState<CardapioSection[]>([])
    const [order, setOrder] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cardapio/items')
            const res = await response.json()
            setData(res)
            setOrder(Object.keys(res[0].items[0]))
        }
        fetchData()

    }, [])

   

    return (
        <div className="flex-1 p-6 text-black">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">
                    Manage Items
                </h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    <i className="fas fa-plus mr-2">
                    </i>
                    New Section
                </button>
            </div>
            <main className="flex flex-1 p-6 flex-col-reverse">

                {
                    data.map(({ sectionName, items }, index) => {

                        items.map((item, i) => {
                            console.log("test", Object.keys(items[0]))
                        })
                        return (
                            <Table.section className="flex-1 p-6 flex-col-reverse" sectionName={sectionName} key={sectionName}>
                                <div className="flex flex-row-reverse w-full items-end mb-6">
                                    <button className="bg-slate-300 text-white px-4 py-2 rounded hover:bg-blue-600">
                                        <i className="fas fa-plus mr-2">
                                        </i>
                                        Add New Item
                                    </button>
                                </div>
                                <Table.root className="w-full">
                                    <Table.head className="rounded-t-lg w-full" headerTitles={order} />
                                    <Table.body className="w-full">
                                        {
                                            items.map((item, i) => {
                                                const keys = Object.keys(item)
                                                const values: any = []
                                                keys.forEach((key) => {
                                                    // @ts-expect-error
                                                    values.push(item[key])
                                                    console.log('etste', values)
                                                })
                                                console.log(keys)

                                                return <Table.row rowContent={values} key={item.name} />
                                            })
                                        }
                                    </Table.body>
                                </Table.root>
                            </Table.section>)
                    })
                }

            </main>
        </div>

    )
}