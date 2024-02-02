import prisma from "../../../prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const createCollectionSchema = z.object({
  code: z.string().min(2).max(3),
  nama: z.string().min(1).max(255),
  size: z.string().min(1).max(4),
  jenis: z.string().min(1).max(15),
  imgUrl: z.string().min(1).max(1000),
  harga: z.number(),
})

export async function GET() {
  const res = await prisma.collection.findMany()
  return NextResponse.json(res, { status: 200 })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = createCollectionSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const newCollection = await prisma.collection.create({
    data: {
      code: body.code,
      nama: body.nama,
      size: body.size,
      jenis: body.jenis,
      imgUrl: body.imgUrl,
      harga: body.harga,
      status: "AVAILABLE",
    },
  })

  return NextResponse.json(newCollection, { status: 200 })
}
