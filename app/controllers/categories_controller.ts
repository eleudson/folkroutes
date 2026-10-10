import type { HttpContext } from '@adonisjs/core/http'
import { categoryValidator } from '#validators/category_validator'
import Category from '#models/category'

export default class CategoriesController {
  // Lista todas as categorias
  async index({ inertia }: HttpContext) {
    const categories = await Category.all()
    return inertia.render('categories/index', { categories })
  }

  // Página do formulário de criação
  async create({ inertia }: HttpContext) {
    return inertia.render('categories/create')
  }

  // Salva a nova categoria no banco
  async store({ request, response }: HttpContext) {
    // O validateUsing intercepta a requisição. Se falhar, ele aborta e devolve os erros pro React.
    // Se passar, ele retorna os dados já limpos e validados.
    const data = await request.validateUsing(categoryValidator)
    
    await Category.create(data)
    
    return response.redirect().toRoute('categories.index')
  }

  // Mostra os detalhes
  async show({ params, inertia }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    return inertia.render('categories/show', { category })
  }

  // Página do formulário de edição
  async edit({ params, inertia }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    
    // O .serialize() pega apenas os dados reais (id, name, description) 
    // e os envia limpos para o React
    return inertia.render('categories/edit', { 
      category: category.serialize() 
    })
  }

  // Atualiza a categoria no banco
  async update({ params, request, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    
    // Mesma validação aqui na edição
    const data = await request.validateUsing(categoryValidator)

    category.merge(data)
    await category.save()

    return response.redirect().toRoute('categories.index')
  }

  // Deleta a categoria
  async destroy({ params, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    await category.delete()

    return response.redirect().toRoute('categories.index')
  }
}