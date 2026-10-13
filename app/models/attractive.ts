import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types'
import Type from '#models/type'
import Locality from '#models/locality'

export default class Attractive extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string // Obrigatório

  @column()
  declare latitude: number

  @column()
  declare longitude: number

  @column()
  declare typeId: number

  @belongsTo(() => Type)
  declare type: BelongsTo<typeof Type>

  @column()
  declare localityId: number

  @belongsTo(() => Locality)
  declare locality: BelongsTo<typeof Locality>

  // Único campo opcional/anulável
  @column()
  declare appreciation: string | null

  @column()
  declare scoreInfluenceOfTheClimate: number

  @column()
  declare scorePhysicalExertion: number

  @column()
  declare scoreSecurity: number

  @column()
  declare scoreConveniences: number

  @column()
  declare scoreDifficultyOfAccess: number

  @column()
  declare scoreInterpretiveDiversity: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
