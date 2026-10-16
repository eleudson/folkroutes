import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Attractive from '#models/attractive'

export default class extends BaseSeeder {
  async run() {
    await Attractive.updateOrCreateMany('name', [
      {
        name: 'Trilha do Açude de Suassurana',
        description:
          'Caminhada guiada com interpretação da flora da Caatinga e contemplação do açude histórico.',
        latitude: -6.311,
        longitude: -39.4125,
        typeId: 2,
        localityId: 1, // Bate com o ID de Distrito de Suassurana
        appreciation: 'Atrativo de alto valor comunitário e forte vínculo com a memória local.',
        scoreInfluenceOfTheClimate: 2,
        scorePhysicalExertion: 1,
        scoreSecurity: 1,
        scoreConveniences: 1,
        scoreDifficultyOfAccess: 1,
        scoreInterpretiveDiversity: 2,
      },
      {
        name: 'Passeio pelo Humedal Corral de Piedra e Rio Tempisque',
        description:
          'Recorrido de barco e navegação observacional pelos ecossistemas de manguezal, lagoas e biodiversidade de aves do Humedal Corral de Piedra.',
        latitude: 10.2235,
        longitude: -85.2891,
        typeId: 2,
        localityId: 2, // Bate com o ID de Corral de Piedra
        appreciation: 'Área de relevante valor ecológico e santuário natural comunitário em Nicoya.',
        scoreInfluenceOfTheClimate: 2,
        scorePhysicalExertion: 1,
        scoreSecurity: 2,
        scoreConveniences: 1,
        scoreDifficultyOfAccess: 2,
        scoreInterpretiveDiversity: 3,
      },
    ])
  }
}
