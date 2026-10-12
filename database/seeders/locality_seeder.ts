import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Locality from '#models/locality'

export default class extends BaseSeeder {
  async run() {
    await Locality.createMany([
      {
        name: 'Parque do Cocó',
        description: 'Área de preservação ambiental com trilhas ecológicas e parque urbano.',
        latitude: -3.7483,
        longitude: -38.4812,
      },
      {
        name: 'Praça do Ferreira',
        description: 'Histórica praça no centro da cidade, famosa pela Coluna da Hora.',
        latitude: -3.7275,
        longitude: -38.5278,
      },
    ])
  }
}
