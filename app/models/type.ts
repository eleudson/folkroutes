import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types'
import type { HasMany } from '@adonisjs/lucid/types'
import Category from '#models/category'
import Attractive from '#models/attractive'

export default class Type extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string | null

  @column()
  declare categoryId: number

  // Relacionamento: Um tipo pertence a uma categoria
  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  // Relacionamento: Um tipo pertence a uma categoria
  @hasMany(() => Attractive)
  declare attractives: HasMany<typeof Attractive>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}