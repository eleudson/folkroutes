import type { HttpContext } from '@adonisjs/core/http'
import Attractive from '#models/attractive'
import Image from '#models/image'
import app from '@adonisjs/core/services/app'
import { unlink } from 'node:fs/promises'

export default class ImagesController {
  public async index({ params, response }: HttpContext) {
    const attractive = await Attractive.findOrFail(params.attractive_id)
    const images = await attractive.related('images').query().orderBy('created_at', 'desc')

    return response.ok(images)
  }

  public async store({ params, request, response }: HttpContext) {
    const attractive = await Attractive.findOrFail(params.attractive_id)
    const files = request.files('images', {
      size: '10mb',
      extnames: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
    })

    if (!files.length) {
      return response.badRequest({ message: 'Nenhuma imagem enviada.' })
    }

    const uploadedImages: Image[] = []

    for (const file of files) {
      if (!file.isValid) {
        return response.badRequest({ errors: file.errors })
      }

      const fileName = `${Date.now()}_${Math.round(Math.random() * 1e9)}.${file.extname}`

      await file.move(app.makePath('public/uploads/attractives'), {
        name: fileName,
        overwrite: true,
      })

      const image = await attractive.related('images').create({
        fileName: fileName,
        originalName: file.clientName,
        mimeType: `${file.type}/${file.subtype}`,
        size: file.size,
      })

      uploadedImages.push(image)
    }

    return response.created({
      message: 'Imagens enviadas com sucesso!',
      data: uploadedImages,
    })
  }

  public async destroy({ params, response }: HttpContext) {
    const image = await Image.findOrFail(params.id)

    const filePath = app.makePath('public/uploads/attractives', image.fileName)
    try {
      await unlink(filePath)
    } catch {
      // Arquivo não encontrado no disco
    }

    await image.delete()

    return response.ok({ message: 'Imagem removida com sucesso.' })
  }
}
