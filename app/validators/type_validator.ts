import vine from '@vinejs/vine'

export const typeValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(100),
    description: vine.string().trim().optional(),
    categoryId: vine.number().exists({ table: 'categories', column: 'id' }),
  })
)