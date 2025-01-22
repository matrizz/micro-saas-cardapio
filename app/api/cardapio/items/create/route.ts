import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@/lib/prisma'


export async function POST(req: NextApiRequest, res: NextApiResponse) {

    await prisma.menu.create({
        data: req.body
    })

    return NextResponse.json({ message: 'Item(s) created successfully' }, { status: 201 })
}