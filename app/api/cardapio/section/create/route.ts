import { NextRequest, NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest, res: NextApiResponse) {

    try {
        const { sectionName } = await req.json()
        
        const res = await prisma.menu.create({
            data: {
                sectionName,
                items: [] 
            }
        })

        return NextResponse.json({ message: 'Section created successfully' }, { status: 201 })
    } catch (err) {
        return NextResponse.json({ message: err }, { status: 500 })
    }
}   