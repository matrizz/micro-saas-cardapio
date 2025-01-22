import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@/lib/prisma'
import cardapio from '../cardapio.json'


export async function GET(req: NextApiRequest, res: NextApiResponse) {

    cardapio.map(async ({sectionName, items}) => {
        await prisma.menu.create({
            data: {
                sectionName,
                items
            }
        })
    })

    return NextResponse.json({ message: 'Item(s) created successfully' }, { status: 200 })
}