import { uploadImage } from '@/lib/uploadImage'
import { NextResponse } from 'next/server'


export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file' }, { status: 400 })
  }

  const result = await uploadImage(file)
  return NextResponse.json(result)
}
