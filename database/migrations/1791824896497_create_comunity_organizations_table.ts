// Criação do arquivo: node ace make:migration create_comunity_organizations_table

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comunity_organizations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // Como criar tabela intermediária para relacionamento N:N
      // table.tipo('nome_da_coluna').unsigned().references('id').inTable('nome_da_tabela_referenciada').onDelete('CASCADE').notNullable()
      // Faça para as duas tabelas que estão se relacionando, no caso, comunities e organizations
      table
        .integer('comunity_id')
        .unsigned()
        .references('id')
        .inTable('comunities')
        .onDelete('CASCADE')
        .notNullable()

      table
        .integer('organization_id')
        .unsigned()
        .references('id')
        .inTable('organizations')
        .onDelete('CASCADE')
        .notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}