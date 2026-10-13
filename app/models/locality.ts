import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types'
import Attractive from '#models/attractive'

export default class Locality extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string | null

  @column()
  declare latitude: number

  @column()
  declare longitude: number

  // Relacionamento: Um tipo pertence a uma categoria
  @hasMany(() => Attractive)
  declare attractives: HasMany<typeof Attractive>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}