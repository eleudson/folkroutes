// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import Organization from '#models/organization'
import Comunity from '#models/comunity'
import { createOrganizationValidator, updateOrganizationValidator } from '#validators/organization_validator'

export default class OrganizationsController {
    async index({ inertia }: HttpContext) {
        const organizations = await Organization.query().preload('comunities')
        return inertia.render('organizations/index', { organizations })
    }

    async create({ inertia }: HttpContext) {
        const comunities = await Comunity.all()
        return inertia.render('organizations/create', { comunities })
    }

    async store({ request, response }: HttpContext) {
        const payload = await request.validateUsing(createOrganizationValidator)
        
        // Separamos o array de IDs de comunidades do restante dos dados da organização
        const { comunityIds, ...organizationData } = payload

        // Criamos a organização
        const organization = await Organization.create(organizationData)

        // Se houver comunidades selecionadas, fazemos a sincronização na tabela pivô
        if (comunityIds) {
            await organization.related('comunities').sync(comunityIds)
        }

        return response.redirect().toRoute('organizations.index')
    }

    async show({ params, inertia }: HttpContext) {
        const organization = await Organization.findOrFail(params.id)
        await organization.load('comunities')

        return inertia.render('organizations/show', { organization })
    }

    async edit({ params, inertia }: HttpContext) {
        const organization = await Organization.findOrFail(params.id)
        await organization.load('comunities')

        const comunities = await Comunity.all()

        return inertia.render('organizations/edit', { organization, comunities })
    }

    async update({ params, request, response }: HttpContext) {
        const organization = await Organization.findOrFail(params.id)
        const payload = await request.validateUsing(updateOrganizationValidator)

        const { comunityIds, ...organizationData } = payload

        // Atualiza os dados básicos
        organization.merge(organizationData)
        await organization.save()

        // Sincroniza as comunidades
        if (comunityIds) {
            await organization.related('comunities').sync(comunityIds)
        } else {
            await organization.related('comunities').sync([])
        }

        return response.redirect().toRoute('organizations.index')
    }

    async destroy({ params, response }: HttpContext) {
        const organization = await Organization.findOrFail(params.id)
        await organization.delete()

        return response.redirect().toRoute('organizations.index')
    }
}