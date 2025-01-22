import { NextResponse } from 'next/server'
import cardapio from './cardapio.json'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@/lib/prisma'


export async function GET(req: NextApiRequest, res: NextApiResponse) {

    const data = await prisma.menu.findMany()
    console.log(data)

    return NextResponse.json(data)
}