import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Organization from '#models/organization'

export default class Comunity extends BaseModel {
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

  @manyToMany(() => Organization, {
    pivotTable: 'comunity_organizations',
    pivotForeignKey: 'comunity_id',
    pivotRelatedForeignKey: 'organization_id',
  })
  declare organizations: ManyToMany<typeof Organization>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}