import vine from '@vinejs/vine'

export const createOrganizationValidator = vine.compile(
  vine.object({
    name: 
        vine
        .string()
        .trim()
        .minLength(3)
        .maxLength(255),

    description: 
        vine
        .string()
        .trim()
        .optional(),

    latitude: 
        vine
        .number()
        .optional(),

    longitude: 
        vine
        .number()
        .optional(),

    // Valida que é um array de IDs e que cada ID existe na tabela comunities
    comunityIds: 
        vine
        .array(
            vine
            .number()
            .exists({ table: 'comunities', column: 'id' })
        ).optional(),
  })
)

export const updateOrganizationValidator = vine.compile(
  vine.object({
    name: 
        vine
        .string()
        .trim()
        .minLength(3)
        .maxLength(255),

    description: 
        vine
        .string()
        .trim()
        .optional(),

    latitude: 
        vine
        .number()
        .optional(),

    longitude: 
        vine
        .number()
        .optional(),
        
    comunityIds: 
        vine
        .array(
            vine
            .number()
            .exists({ table: 'comunities', column: 'id' })
        ).optional(),
  })
)