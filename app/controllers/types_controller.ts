import type { HttpContext } from '@adonisjs/core/http'
import { typeValidator } from '#validators/type_validator'
import Type from '#models/type'

export default class TypesController {
  // Lista todas as categorias
  async index({ inertia }: HttpContext) {
    const types = await Type.all()
    return inertia.render('types/index', { types })
  }

  // Página do formulário de criação
  async create({ inertia }: HttpContext) {
    return inertia.render('types/create')
  }

  // Salva a nova categoria no banco
  async store({ request, response }: HttpContext) {
    // O validateUsing intercepta a requisição. Se falhar, ele aborta e devolve os erros pro React.
    // Se passar, ele retorna os dados já limpos e validados.
    const data = await request.validateUsing(typeValidator)
    
    await Type.create(data)
    
    return response.redirect().toRoute('types.index')
  }

  // Mostra os detalhes
  async show({ params, inertia }: HttpContext) {
    const type = await Type.findOrFail(params.id)
    return inertia.render('types/show', { type })
  }

  // Página do formulário de edição
  async edit({ params, inertia }: HttpContext) {
    const type = await Type.findOrFail(params.id)
    
    // O .serialize() pega apenas os dados reais (id, name, description) 
    // e os envia limpos para o React
    return inertia.render('types/edit', { 
      type: type.serialize() 
    })
  }

  // Atualiza a categoria no banco
  async update({ params, request, response }: HttpContext) {
    const type = await Type.findOrFail(params.id)
    
    // Mesma validação aqui na edição
    const data = await request.validateUsing(typeValidator)

    type.merge(data)
    await type.save()

    return response.redirect().toRoute('types.index')
  }

  // Deleta a categoria
  async destroy({ params, response }: HttpContext) {
    const type = await Type.findOrFail(params.id)
    await type.delete()

    return response.redirect().toRoute('types.index')
  }
}