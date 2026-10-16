import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types'
import Comunity from '#models/comunity'

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

  @column()
  declare comunityId: number | null

  @belongsTo(() => Comunity)
  declare comunity: BelongsTo<typeof Comunity>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}