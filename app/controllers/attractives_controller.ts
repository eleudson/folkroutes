import type { HttpContext } from '@adonisjs/core/http'
import Attractive from '#models/attractive'
import Type from '#models/type'
import Locality from '#models/locality'
import { createAttractiveValidator, updateAttractiveValidator } from '#validators/attractive_validator'

export default class AttractivesController {
  // 1. Listagem de atrativos com Tipo (e sua Categoria) e Localidade
  async index({ inertia }: HttpContext) {
    const attractives = await Attractive.query()
      .preload('type', (typeQuery) => {
        typeQuery.preload('category')
      })
      .preload('locality')

    return inertia.render('attractives/index', {
      attractives: attractives.map((a) => a.serialize()),
    })
  }

  // 2. Formulário de Criação (Envia Tipos com Categoria e Localidades)
  async create({ inertia }: HttpContext) {
    const types = await Type.query().preload('category')
    const localities = await Locality.all()

    return inertia.render('attractives/create', {
      types: types.map((t) => t.serialize()),
      localities: localities.map((l) => l.serialize()),
    })
  }

  // 3. Salvar novo Atrativo
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createAttractiveValidator)
    await Attractive.create(payload)

    return response.redirect().toRoute('attractives.index')
  }

  // 4. Detalhes do Atrativo
  async show({ params, inertia }: HttpContext) {
    const attractive = await Attractive.query()
      .where('id', params.id)
      .preload('type', (typeQuery) => {
        typeQuery.preload('category')
      })
      .preload('locality')
      .firstOrFail()

    return inertia.render('attractives/show', {
      attractive: attractive.serialize(),
    })
  }

  // 5. Formulário de Edição
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

  // 6. Atualizar Atrativo
  async update({ params, request, response }: HttpContext) {
    const attractive = await Attractive.findOrFail(params.id)
    const payload = await request.validateUsing(updateAttractiveValidator)

    attractive.merge(payload)
    await attractive.save()

    return response.redirect().toRoute('attractives.index')
  }

  // 7. Deletar Atrativo
  async destroy({ params, response }: HttpContext) {
    const attractive = await Attractive.findOrFail(params.id)
    await attractive.delete()

    return response.redirect().toRoute('attractives.index')
  }
}
