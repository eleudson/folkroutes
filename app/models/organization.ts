import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Comunity from '#models/comunity'

export default class Organization extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string | null

  @column()
  declare latitude: number | null

  @column()
  declare longitude: number | null

  @manyToMany(() => Comunity, {
    pivotTable: 'comunity_organizations',
    pivotForeignKey: 'organization_id',
    pivotRelatedForeignKey: 'comunity_id',
  })
  declare comunities: ManyToMany<typeof Comunity>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}