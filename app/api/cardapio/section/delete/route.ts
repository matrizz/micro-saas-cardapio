import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@/lib/prisma'
import { URLSearchParams } from 'url'


export async function DELETE(req: NextApiRequest, res: NextApiResponse) {

    const params = new URLSearchParams(req.url).values().toArray()

    await prisma.menu.delete({
        where: {
            sectionName: params[0] as string
        }
    })

    return NextResponse.json({ message: 'Section deleted successfully' }, { status: 200 })
}