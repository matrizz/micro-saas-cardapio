import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@/lib/prisma'


export async function UPDATE(req: NextApiRequest, res: NextApiResponse) {

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