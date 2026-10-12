import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comunities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.text('description').nullable()

      // Coordenadas geográficas
      // 10 dígitos no total, sendo 8 após a vírgula
      table.decimal('latitude', 10, 8).notNullable()
      // 11 dígitos no total, sendo 8 após a vírgula
      table.decimal('longitude', 11, 8).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}