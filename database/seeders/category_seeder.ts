import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

export default class extends BaseSeeder {
  async run() {
    await Category.fetchOrCreateMany('name', [
      {
        name: 'Natural',
        description: 'Atrativos relacionados à flora, fauna, recursos hídricos e relevo da comunidade.',
      },
      {
        name: 'Cultural',
        description: 'Manifestações históricas, artesanais, gastronômicas e tradições orais.',
      },
      {
        name: 'Técnico/Científico',
        description: 'Experiências de agroecologia, manejo sustentável, pesquisas e produção comunitária.',
      },
      {
        name: 'Personalidade e Memória',
        description: 'Mestres da cultura, saberes tradicionais e lideranças históricas locais.',
      },
    ])
  }
}