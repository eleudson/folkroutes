import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'attractives'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100).notNullable()
      table.text('description').notNullable()
      table.decimal('latitude', 10, 8).notNullable()
      table.decimal('longitude', 11, 8).notNullable()

      // Chaves Estrangeiras
      table
        .integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onDelete('CASCADE')
        .notNullable()

      table
        .integer('locality_id')
        .unsigned()
        .references('id')
        .inTable('localities')
        .onDelete('CASCADE')
        .notNullable()

      // Campo opcional
      table.text('appreciation').nullable()

      // Métricas de Pontuação (0 a 2)
      table.integer('score_influence_of_the_climate').notNullable().defaultTo(0)
      table.integer('score_physical_exertion').notNullable().defaultTo(0)
      table.integer('score_security').notNullable().defaultTo(0)
      table.integer('score_conveniences').notNullable().defaultTo(0)
      table.integer('score_difficulty_of_access').notNullable().defaultTo(0)
      table.integer('score_interpretive_diversity').notNullable().defaultTo(0)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}