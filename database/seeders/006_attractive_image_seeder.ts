import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Attractive from '#models/attractive'
import AttractiveImage from '#models/attractive_image'

export default class extends BaseSeeder {
  async run() {
    const suassurana = await Attractive.findByOrFail('name', 'Trilha do Açude de Suassurana')
    const corralPiedra = await Attractive.findByOrFail('name', 'Passeio pelo Humedal Corral de Piedra e Rio Tempisque')

    await AttractiveImage.updateOrCreateMany('fileName', [
      {
        attractiveId: suassurana.id,
        fileName: 'suassurana_acude_1.jpg',
        originalName: 'vista_acude_suassurana.jpg',
        mimeType: 'image/jpeg',
        size: 245000,
      },
      {
        attractiveId: suassurana.id,
        fileName: 'suassurana_trilha_2.jpg',
        originalName: 'trilha_caatinga_guiada.jpg',
        mimeType: 'image/jpeg',
        size: 198000,
      },
      {
        attractiveId: corralPiedra.id,
        fileName: 'corral_piedra_barco_1.jpg',
        originalName: 'vista_humedal_barco.jpg',
        mimeType: 'image/jpeg',
        size: 230000,
      },
      {
        attractiveId: corralPiedra.id,
        fileName: 'corral_piedra_mangue_2.jpg',
        originalName: 'manguezais_rio_tempisque.jpg',
        mimeType: 'image/jpeg',
        size: 215000,
      },
    ])
  }
}
