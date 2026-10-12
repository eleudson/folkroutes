import type { HttpContext } from '@adonisjs/core/http'
import Type from '#models/type'
import Category from '#models/category'
import { typeValidator } from '#validators/type_validator'

export default class TypesController {
  // 1. Listagem com Categoria Carregada
  async index({ inertia }: HttpContext) {
    const types = await Type.query().preload('category')

    return inertia.render('types/index', {
      types: types.map((t) => t.serialize()),
    })
  }

  // 2. Form de Criação (Envia lista de categorias para o dropdown)
  async create({ inertia }: HttpContext) {
    const categories = await Category.all()

    return inertia.render('types/create', {
      categories: categories.map((c) => c.serialize()),
    })
  }

  // 3. Salvar Tipo
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(typeValidator)
    await Type.create(payload)

    return response.redirect().toRoute('types.index')
  }

  // 4. Detalhes do Tipo
  async show({ params, inertia }: HttpContext) {
    const type = await Type.query().where('id', params.id).preload('category').firstOrFail()

    return inertia.render('types/show', {
      type: type.serialize(),
    })
  }

  // 5. Form de Edição (Envia o tipo e todas as categorias)
  async edit({ params, inertia }: HttpContext) {
    const type = await Type.findOrFail(params.id)
    const categories = await Category.all()

    return inertia.render('types/edit', {
      type: type.serialize(),
      categories: categories.map((c) => c.serialize()),
    })
  }

  // 6. Atualizar Tipo
  async update({ params, request, response }: HttpContext) {
    const type = await Type.findOrFail(params.id)
    const payload = await request.validateUsing(typeValidator)

    type.merge(payload)
    await type.save()

    return response.redirect().toRoute('types.index')
  }

  // 7. Deletar Tipo
  async destroy({ params, response }: HttpContext) {
    const type = await Type.findOrFail(params.id)
    await type.delete()

    return response.redirect().toRoute('types.index')
  }
}
