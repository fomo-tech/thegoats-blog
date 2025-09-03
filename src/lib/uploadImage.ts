/* eslint-disable @typescript-eslint/no-explicit-any */
import cloudinary from '@/lib/cloudinary'
import streamifier from 'streamifier'


export async function uploadImage(file: File) {
  try {
    if (!file || typeof file.name !== 'string') {
      return {
        success: false,
        error: 'File không hợp lệ',
        status: 400,
      }
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const result = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'uploads', // Thư mục Cloudinary
          resource_type: 'auto', // Tự nhận diện image/video/etc.
        },
        (error, result) => {
          if (error) return reject(error)
          resolve(result)
        }
      )

      streamifier.createReadStream(buffer).pipe(stream)
    })

    return {
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
      file:{
         url: result.secure_url,
      }
    }
  } catch (err) {
    console.error('Upload thất bại:', err)
    return {
      success: false,
      error: 'Lỗi server khi upload',
      status: 500,
    }
  }
}
