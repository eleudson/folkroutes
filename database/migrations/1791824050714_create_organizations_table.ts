// Criação desse arquivo: node ace make:migration create_organizations_table

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'organizations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Aqui criamos as colunas da tabela organizations
      // Formato: table.tipo('nome_da_coluna').restrições()
      table.increments('id')
      table.string('name').notNullable()
      table.text('description').nullable() 
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