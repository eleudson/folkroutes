import vine from '@vinejs/vine'

/**
 * Validador para criação de uma nova localidade
 */
export const createLocalityValidator = vine.compile(
  vine.object({
    name: vine
      .string()
      .trim()
      .minLength(3)
      .maxLength(255),

    description: vine
      .string()
      .trim()
      .minLength(3),

    latitude: vine
      .number()
      .min(-90)
      .max(90),

    longitude: vine
      .number()
      .min(-180)
      .max(180),
  })
)

/**
 * Validador para atualização (permite enviar apenas os campos que mudaram)
 */
export const updateLocalityValidator = vine.compile(
  vine.object({
    name: vine
      .string()
      .trim()
      .minLength(3)
      .maxLength(255)
      .optional(),

    description: vine
      .string()
      .trim()
      .minLength(3)
      .optional(),

    latitude: vine
      .number()
      .min(-90)
      .max(90)
      .optional(),

    longitude: vine
      .number()
      .min(-180)
      .max(180)
      .optional(),
  })
)