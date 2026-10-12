import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comunity from '#models/comunity'

export default class extends BaseSeeder {
  async run() {
    await Comunity.createMany([
      {
        name: 'José de Alencar',
        description: 'Distrito e comunidade rural do município de Iguatu/CE, com vocação para a agricultura familiar e forte tradição comunitária.',
        latitude: -6.4010,
        longitude: -39.1670,
      },
      {
        name: 'Suassurana',
        description: 'Distrito de Iguatu/CE, conhecido por sua histórica estação ferroviária e relevante presença cultural e produtiva na região.',
        latitude: -6.3095,
        longitude: -39.4118,
      },
    ])
  }
}