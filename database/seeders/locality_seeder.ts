import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Locality from '#models/locality'

export default class extends BaseSeeder {
  async run() {
    await Locality.fetchOrCreateMany('name', [
      {
        name: 'Distrito de Suassurana',
        description: 'Distrito localizado no município de Iguatu, Ceará, Brasil. Abriga patrimônio histórico ferroviário e áreas de convivência com o semiárido.',
        latitude: -6.3095,
        longitude: -39.4118,
      },
      {
        name: 'Corral de Piedra',
        description: 'Comunidade rural no cantão de Nicoya, província de Guanacaste, Costa Rica. Famosa pelo ecossistema do Humedal Corral de Piedra e pela bacia do Rio Tempisque.',
        latitude: 10.2231,
        longitude: -85.2891,
      },
    ])
  }
}