import vine from '@vinejs/vine'

export const typeValidator = vine.compile(
  vine.object({
    // Obrigatório (não nulo), string, remove espaços nas pontas e min 3 caracteres
    name: vine.string().trim().minLength(3),
    
    // Obrigatório, string, remove espaços nas pontas e min 3 caracteres
    description: vine.string().trim().minLength(3)
  })
)
