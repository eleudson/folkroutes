import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'
import Type from '#models/type'

export default class extends BaseSeeder {
  async run() {
    const natural = await Category.findByOrFail('name', 'Natural')
    const cultural = await Category.findByOrFail('name', 'Cultural')
    const tecnico = await Category.findByOrFail('name', 'Técnico/Científico')
    const memoria = await Category.findByOrFail('name', 'Personalidade e Memória')

    await Type.fetchOrCreateMany(['name', 'categoryId'], [
      // Tipos Naturais
      {
        name: 'Rio / Lagoa / Açude',
        description: 'Recursos hídricos comunitários utilizados para vivências, contemplação, pesca artesanal e lazer.',
        categoryId: natural.id,
      },
      {
        name: 'Trilha Ecológica',
        description: 'Percursos guiados por condutores locais através da fauna, flora e relevo característicos da região.',
        categoryId: natural.id,
      },
      {
        name: 'Área de Conservação / Humedal',
        description: 'Ecossistemas preservados, manguezais e zonas de proteção geridos de forma sustentável pela comunidade.',
        categoryId: natural.id,
      },

      // Tipos Culturais
      {
        name: 'Artesanato Tradicional',
        description: 'Peças e técnicas artesanais produzidas com matérias-primas e saberes transmitidos entre gerações.',
        categoryId: cultural.id,
      },
      {
        name: 'Gastronomia Local',
        description: 'Pratos típicos e saberes culinários preparados com ingredientes da agricultura e pesca comunitárias.',
        categoryId: cultural.id,
      },
      {
        name: 'Festejos e Ritos Tradicionais',
        description: 'Celebrações religiosas, festas comunitárias, folclore e rituais de identidade cultural.',
        categoryId: cultural.id,
      },

      // Tipos Técnico-Científicos
      {
        name: 'Agroecologia e Meliponicultura',
        description: 'Sistemas de cultivo orgânico sustentável, hortas comunitárias e criação de abelhas nativas sem ferrão.',
        categoryId: tecnico.id,
      },
      {
        name: 'Manejo Florestal e Conservação',
        description: 'Práticas comunitárias de reflorestamento, conservação de solos e uso consciente da Caatinga/floresta.',
        categoryId: tecnico.id,
      },

      // Tipos Personalidade e Memória
      {
        name: 'Mestre da Cultura / Sabedoria Popular',
        description: 'Detentores de saberes ancestrais, artistas e guardiões de técnicas tradicionais reconhecidos pela comunidade.',
        categoryId: memoria.id,
      },
      {
        name: 'Guardião da Memória / Contador de Histórias',
        description: 'Lideranças e idosos responsáveis por preservar e narrar a história oral e o patrimônio imaterial local.',
        categoryId: memoria.id,
      },
    ])
  }
}
