import type { HttpContext } from '@adonisjs/core/http'
import Locality from '#models/locality'
import { localityValidator } from '#validators/locality_validator'

export default class LocalitiesController {
  // 1. Listar todas as localidades
  // Retorna um array JSON puro para o React mapear
  async index({ inertia }: HttpContext) {
    const localities = await Locality.all()

    // Retorna a view do Inertia passando a lista de localidades
    return inertia.render('localities/index', { 
      localities: localities.map(l => l.serialize()) 
    })
  }

/**
   * Exibe os detalhes de uma localidade e seus atrativos
   */
  async show({ params, inertia }: HttpContext) {
    const locality = await Locality.query()
      .where('id', params.id)
      .preload('attractives', (query) => {
        query.preload('type').preload('images')
      })
      .firstOrFail()

    return inertia.render('localities/show', {
      locality: locality.serialize(),
    })
  }
    
  // 2. Salvar no banco (Recebe um POST do React)
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createLocalityValidator)
    const locality = await Locality.create(payload)
    
    return response.created(locality)
  }

  // 3. Mostrar uma localidade específica
  async show({ params, inertia }: HttpContext) {
    const locality = await Locality.findOrFail(params.id)

    return inertia.render('localities/show', { 
      locality: locality.serialize() 
    })
  }
  
  // 4. Atualizar no banco (Recebe um PUT/PATCH do React)
  async update({ params, request, response }: HttpContext) {
    const locality = await Locality.findOrFail(params.id)
    const payload = await request.validateUsing(updateLocalityValidator)

    locality.merge(payload)
    await locality.save()

    return response.ok(locality)
  }

  // 5. Formulário de edição (Inertia)
  async edit({ params, inertia }: HttpContext) {
    const locality = await Locality.findOrFail(params.id)

    return inertia.render('localities/edit', { 
      locality: locality.serialize() 
    })
  }

  // 6. Deletar (Recebe um DELETE do React)
  async destroy({ params, response }: HttpContext) {
    const locality = await Locality.findOrFail(params.id)
    await locality.delete()

    // Retorna status 204 (No Content) indicando que excluiu com sucesso
    return response.noContent()
  }
}