import type { HttpContext } from '@adonisjs/core/http'
import Attractive from '#models/attractive'
import Type from '#models/type'
import Locality from '#models/locality'
import { createAttractiveValidator, updateAttractiveValidator } from '#validators/attractive_validator'

export default class AttractivesController {
  /**
   * Lista todos os atrativos
   */
  async index({ inertia }: HttpContext) {
    const attractives = await Attractive.query()
      .preload('type', (q) => q.preload('category'))
      .preload('locality')
      .preload('images')

    return inertia.render('attractives/index', {
      attractives: attractives.map((a) => a.serialize()),
    })
  }

  /**
   * Formulário de criação de atrativo
   */
  async create({ inertia }: HttpContext) {
    const types = await Type.query().preload('category')
    const localities = await Locality.all()

    return inertia.render('attractives/create', {
      types: types.map((t) => t.serialize()),
      localities: localities.map((l) => l.serialize()),
    })
  }

  /**
   * Processa a criação de um novo atrativo
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createAttractiveValidator)
    await Attractive.create(payload)

    return response.redirect().toRoute('attractives.index')
  }

  /**
   * Exibe os detalhes de um atrativo específico
   */
  async show({ params, inertia }: HttpContext) {
    const attractive = await Attractive.query()
      .where('id', params.id)
      .preload('type', (q) => q.preload('category'))
      .preload('locality')
      .preload('images')
      .firstOrFail()

    return inertia.render('attractives/show', {
      attractive: attractive.serialize(),
    })
  }

  /**
   * Exibe a galeria de imagens de um atrativo específico
   */
  async images({ params, inertia }: HttpContext) {
    const attractive = await Attractive.query()
      .where('id', params.id)
      .preload('images')
      .firstOrFail()

    return inertia.render('attractives/images', {
      attractive: attractive.serialize(),
      images: attractive.images.map((img) => img.serialize()),
    })
  }

  /**
   * Formulário de edição de atrativo
   */
  async edit({ params, inertia }: HttpContext) {
    const attractive = await Attractive.findOrFail(params.id)
    const types = await Type.query().preload('category')
    const localities = await Locality.all()

    return inertia.render('attractives/edit', {
      attractive: attractive.serialize(),
      types: types.map((t) => t.serialize()),
      localities: localities.map((l) => l.serialize()),
    })
  }

  /**
   * Processa a atualização do atrativo
   */
  async update({ params, request, response }: HttpContext) {
    const attractive = await Attractive.findOrFail(params.id)
    const payload = await request.validateUsing(updateAttractiveValidator)

    attractive.merge(payload)
    await attractive.save()

    return response.redirect().toRoute('attractives.index')
  }

  /**
   * Remove o atrativo
   */
  async destroy({ params, response }: HttpContext) {
    const attractive = await Attractive.findOrFail(params.id)
    await attractive.delete()

    return response.redirect().toRoute('attractives.index')
  }
}
