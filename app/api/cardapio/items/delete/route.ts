import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@/lib/prisma'


export async function DELETE(req: NextApiRequest, res: NextApiResponse) {

    await prisma.menu.delete({
        where: {
            sectionName: req.query.id as string
        }
    })

    return NextResponse.json({ message: 'Item(s) deleted successfully' }, { status: 200 })
}