import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Attractive from '#models/attractive'
import Type from '#models/type'
import Locality from '#models/locality'

export default class extends BaseSeeder {
  async run() {
    const suassurana = await Locality.findByOrFail('name', 'Distrito de Suassurana')
    const corralPiedra = await Locality.findByOrFail('name', 'Corral de Piedra')

    const trilha = await Type.findByOrFail('name', 'Trilha Ecológica')
    const humedal = await Type.findByOrFail('name', 'Área de Conservação / Humedal')

    await Attractive.fetchOrCreateMany('name', [
      {
        name: 'Trilha do Açude de Suassurana',
        description: 'Caminhada guiada com interpretação da flora da Caatinga e contemplação do açude histórico.',
        latitude: -6.3110,
        longitude: -39.4125,
        typeId: trilha.id,
        localityId: suassurana.id,
        appreciation: 'Atrativo de alto valor comunitário e forte vínculo com a memória local.',
        scoreInfluenceOfTheClimate: 2,
        scorePhysicalExertion: 1,
        scoreSecurity: 1,
        scoreConveniences: 1,
        scoreDifficultyOfAccess: 1,
        scoreInterpretiveDiversity: 2,
      },
      {
        name: 'Santuário do Humedal Corral de Piedra',
        description: 'Recorrido em embarcação comunitária para avistamento de aves e conservação do manguezal.',
        latitude: 10.2245,
        longitude: -85.2880,
        typeId: humedal.id,
        localityId: corralPiedra.id,
        appreciation: 'Área chave para o ecoturismo e preservação ambiental gerida pela ASOTUR.',
        scoreInfluenceOfTheClimate: 2,
        scorePhysicalExertion: 0,
        scoreSecurity: 2,
        scoreConveniences: 1,
        scoreDifficultyOfAccess: 2,
        scoreInterpretiveDiversity: 2,
      },
    ])
  }
}
