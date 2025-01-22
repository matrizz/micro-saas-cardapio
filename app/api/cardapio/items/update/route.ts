import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@/lib/prisma'
import { deprecate } from 'util'


// @deprecate
export async function POST(req: NextApiRequest, res: NextApiResponse) {

    const response = await prisma.menu.findFirst({
        where: {
            sectionName: req.body.sectionName
        }
    })       

    const items = response?.items as []
    //@ts-expect-error
    items.push(data)

    await prisma.menu.update({
        data: {
            sectionName: req.body.sectionName,
            items: req.body.items
        },
        where: {
            sectionName: req.body.sectionName
        }
    })

    return NextResponse.json({ message: "Item(s) updated successfully" }, { status: 200 })
}