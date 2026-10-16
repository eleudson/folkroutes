import { DateTime } from 'luxon'
import { BaseModel, column, computed, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types'
import Attractive from '#models/attractive'

export default class AttractiveImage extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fileName: string

  @column()
  declare originalName: string

  @column()
  declare mimeType: string

  @column()
  declare size: number

  @column()
  declare attractiveId: number

  @belongsTo(() => Attractive)
  declare attractive: BelongsTo<typeof Attractive>

  // Getter calculado: gera a URL dinamicamente na serialização
  @computed()
  get url() {
    return `/uploads/attractives/${this.fileName}`
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
