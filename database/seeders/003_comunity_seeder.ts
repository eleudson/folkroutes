import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comunity from '#models/comunity'

export default class extends BaseSeeder {
  async run() {
    await Comunity.fetchOrCreateMany('name', [
      {
        name: 'ADESCE',
        description: 'Associação de Desenvolvimento Social, Cultural e Econômico de Suassurana (Iguatu, Ceará, Brasil). Organização comunitária voltada para a promoção cultural, turismo comunitário e desenvolvimento sustentável.',
        latitude: -6.3095,
        longitude: -39.4118,
      },
      {
        name: 'ASOTUR',
        description: 'Asociación de Turismo Rural de Corral de Piedra (Nicoya, Guanacaste, Costa Rica). Organização comunitária focada na conservação dos ecossistemas de mangue/humedal e oferta de roteiros e serviços de turismo rural sustentável.',
        latitude: 10.2231,
        longitude: -85.2891,
      },
    ])
  }
}