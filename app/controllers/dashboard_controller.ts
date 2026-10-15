import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'
import Type from '#models/type'
import Locality from '#models/locality'
import Comunity from '#models/comunity'
import Attractive from '#models/attractive'

export default class DashboardController {
  async index({ inertia }: HttpContext) {
    const [
      categoriesCount,
      typesCount,
      localitiesCount,
      comunitiesCount,
      attractivesCount,
    ] = await Promise.all([
      Category.query().count('* as total'),
      Type.query().count('* as total'),
      Locality.query().count('* as total'),
      Comunity.query().count('* as total'),
      Attractive.query().count('* as total'),
    ])

    const stats = {
      categories: Number(categoriesCount[0].$extras.total || 0),
      types: Number(typesCount[0].$extras.total || 0),
      localities: Number(localitiesCount[0].$extras.total || 0),
      comunities: Number(comunitiesCount[0].$extras.total || 0),
      attractives: Number(attractivesCount[0].$extras.total || 0),
    }

    return inertia.render('dashboard', { stats })
  }
}
