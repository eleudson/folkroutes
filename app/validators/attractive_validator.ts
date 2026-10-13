import vine from '@vinejs/vine'

/**
 * Validador para criação de um novo atrativo
 */
export const createAttractiveValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(100),
    description: vine.string().trim().minLength(3),
    latitude: vine.number().min(-90).max(90),
    longitude: vine.number().min(-180).max(180),
    typeId: vine.number().exists({ table: 'types', column: 'id' }),
    localityId: vine.number().exists({ table: 'localities', column: 'id' }),
    appreciation: vine.string().trim().minLength(3).optional(),
    scoreInfluenceOfTheClimate: vine.number().min(0).max(2),
    scorePhysicalExertion: vine.number().min(0).max(2),
    scoreSecurity: vine.number().min(0).max(2),
    scoreConveniences: vine.number().min(0).max(2),
    scoreDifficultyOfAccess: vine.number().min(0).max(2),
    scoreInterpretiveDiversity: vine.number().min(0).max(2),
  })
)

/**
 * Validador para atualização (campos opcionais)
 */
export const updateAttractiveValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(100).optional(),
    description: vine.string().trim().minLength(3).optional(),
    latitude: vine.number().min(-90).max(90).optional(),
    longitude: vine.number().min(-180).max(180).optional(),
    typeId: vine.number().exists({ table: 'types', column: 'id' }).optional(),
    localityId: vine.number().exists({ table: 'localities', column: 'id' }).optional(),
    appreciation: vine.string().trim().minLength(3).optional(),
    scoreInfluenceOfTheClimate: vine.number().min(0).max(2).optional(),
    scorePhysicalExertion: vine.number().min(0).max(2).optional(),
    scoreSecurity: vine.number().min(0).max(2).optional(),
    scoreConveniences: vine.number().min(0).max(2).optional(),
    scoreDifficultyOfAccess: vine.number().min(0).max(2).optional(),
    scoreInterpretiveDiversity: vine.number().min(0).max(2).optional(),
  })
)