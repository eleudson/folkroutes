import type { HttpContext } from '@adonisjs/core/http'
import Comunity from '#models/comunity'
import { comunityValidator } from '#validators/comunity_validator'

export default class ComunitiesController {
  // 1. Listar todas as comunidades
  // Retorna um array JSON puro para o React mapear
  async index({ inertia }: HttpContext) {
    const comunities = await Comunity.all()

    // Retorna a view do Inertia passando a lista de comunidades
    return inertia.render('comunities/index', { 
      comunities: comunities.map(l => l.serialize()) 
    })
  }

  // 2. Salvar no banco (Recebe um POST do React)
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createLocalityValidator)
    const comunity = await Comunity.create(payload)
    
    return response.created(comunity)
  }

  // 3. Mostrar uma localidade específica
  async show({ params, inertia }: HttpContext) {
    const comunity = await Comunity.findOrFail(params.id)

    return inertia.render('comunities/show', { 
      comunity: comunity.serialize() 
    })
  }
  
  // 4. Atualizar no banco (Recebe um PUT/PATCH do React)
  async update({ params, request, response }: HttpContext) {
    const comunity = await Comunity.findOrFail(params.id)
    const payload = await request.validateUsing(updateLocalityValidator)

    comunity.merge(payload)
    await comunity.save()

    return response.ok(comunity)
  }

  // 5. Formulário de edição (Inertia)
  async edit({ params, inertia }: HttpContext) {
    const comunity = await Comunity.findOrFail(params.id)

    return inertia.render('comunities/edit', { 
      comunity: comunity.serialize() 
    })
  }

  // 6. Deletar (Recebe um DELETE do React)
  async destroy({ params, response }: HttpContext) {
    const comunity = await Comunity.findOrFail(params.id)
    await comunity.delete()

    // Retorna status 204 (No Content) indicando que excluiu com sucesso
    return response.noContent()
  }
}
