/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'dashboard': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard',
    tokens: [{"old":"/dashboard","type":0,"val":"dashboard","end":""}],
    types: placeholder as Registry['dashboard']['types'],
  },
  'categories.index': {
    methods: ["GET","HEAD"],
    pattern: '/categories',
    tokens: [{"old":"/categories","type":0,"val":"categories","end":""}],
    types: placeholder as Registry['categories.index']['types'],
  },
  'categories.create': {
    methods: ["GET","HEAD"],
    pattern: '/categories/create',
    tokens: [{"old":"/categories/create","type":0,"val":"categories","end":""},{"old":"/categories/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['categories.create']['types'],
  },
  'categories.store': {
    methods: ["POST"],
    pattern: '/categories',
    tokens: [{"old":"/categories","type":0,"val":"categories","end":""}],
    types: placeholder as Registry['categories.store']['types'],
  },
  'categories.show': {
    methods: ["GET","HEAD"],
    pattern: '/categories/:id',
    tokens: [{"old":"/categories/:id","type":0,"val":"categories","end":""},{"old":"/categories/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categories.show']['types'],
  },
  'categories.edit': {
    methods: ["GET","HEAD"],
    pattern: '/categories/:id/edit',
    tokens: [{"old":"/categories/:id/edit","type":0,"val":"categories","end":""},{"old":"/categories/:id/edit","type":1,"val":"id","end":""},{"old":"/categories/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['categories.edit']['types'],
  },
  'categories.update': {
    methods: ["PUT","PATCH"],
    pattern: '/categories/:id',
    tokens: [{"old":"/categories/:id","type":0,"val":"categories","end":""},{"old":"/categories/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categories.update']['types'],
  },
  'categories.destroy': {
    methods: ["DELETE"],
    pattern: '/categories/:id',
    tokens: [{"old":"/categories/:id","type":0,"val":"categories","end":""},{"old":"/categories/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categories.destroy']['types'],
  },
  'types.index': {
    methods: ["GET","HEAD"],
    pattern: '/types',
    tokens: [{"old":"/types","type":0,"val":"types","end":""}],
    types: placeholder as Registry['types.index']['types'],
  },
  'types.create': {
    methods: ["GET","HEAD"],
    pattern: '/types/create',
    tokens: [{"old":"/types/create","type":0,"val":"types","end":""},{"old":"/types/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['types.create']['types'],
  },
  'types.store': {
    methods: ["POST"],
    pattern: '/types',
    tokens: [{"old":"/types","type":0,"val":"types","end":""}],
    types: placeholder as Registry['types.store']['types'],
  },
  'types.show': {
    methods: ["GET","HEAD"],
    pattern: '/types/:id',
    tokens: [{"old":"/types/:id","type":0,"val":"types","end":""},{"old":"/types/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['types.show']['types'],
  },
  'types.edit': {
    methods: ["GET","HEAD"],
    pattern: '/types/:id/edit',
    tokens: [{"old":"/types/:id/edit","type":0,"val":"types","end":""},{"old":"/types/:id/edit","type":1,"val":"id","end":""},{"old":"/types/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['types.edit']['types'],
  },
  'types.update': {
    methods: ["PUT","PATCH"],
    pattern: '/types/:id',
    tokens: [{"old":"/types/:id","type":0,"val":"types","end":""},{"old":"/types/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['types.update']['types'],
  },
  'types.destroy': {
    methods: ["DELETE"],
    pattern: '/types/:id',
    tokens: [{"old":"/types/:id","type":0,"val":"types","end":""},{"old":"/types/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['types.destroy']['types'],
  },
  'localities.index': {
    methods: ["GET","HEAD"],
    pattern: '/localities',
    tokens: [{"old":"/localities","type":0,"val":"localities","end":""}],
    types: placeholder as Registry['localities.index']['types'],
  },
  'localities.create': {
    methods: ["GET","HEAD"],
    pattern: '/localities/create',
    tokens: [{"old":"/localities/create","type":0,"val":"localities","end":""},{"old":"/localities/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['localities.create']['types'],
  },
  'localities.store': {
    methods: ["POST"],
    pattern: '/localities',
    tokens: [{"old":"/localities","type":0,"val":"localities","end":""}],
    types: placeholder as Registry['localities.store']['types'],
  },
  'localities.show': {
    methods: ["GET","HEAD"],
    pattern: '/localities/:id',
    tokens: [{"old":"/localities/:id","type":0,"val":"localities","end":""},{"old":"/localities/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['localities.show']['types'],
  },
  'localities.edit': {
    methods: ["GET","HEAD"],
    pattern: '/localities/:id/edit',
    tokens: [{"old":"/localities/:id/edit","type":0,"val":"localities","end":""},{"old":"/localities/:id/edit","type":1,"val":"id","end":""},{"old":"/localities/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['localities.edit']['types'],
  },
  'localities.update': {
    methods: ["PUT","PATCH"],
    pattern: '/localities/:id',
    tokens: [{"old":"/localities/:id","type":0,"val":"localities","end":""},{"old":"/localities/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['localities.update']['types'],
  },
  'localities.destroy': {
    methods: ["DELETE"],
    pattern: '/localities/:id',
    tokens: [{"old":"/localities/:id","type":0,"val":"localities","end":""},{"old":"/localities/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['localities.destroy']['types'],
  },
  'comunities.index': {
    methods: ["GET","HEAD"],
    pattern: '/comunities',
    tokens: [{"old":"/comunities","type":0,"val":"comunities","end":""}],
    types: placeholder as Registry['comunities.index']['types'],
  },
  'comunities.create': {
    methods: ["GET","HEAD"],
    pattern: '/comunities/create',
    tokens: [{"old":"/comunities/create","type":0,"val":"comunities","end":""},{"old":"/comunities/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['comunities.create']['types'],
  },
  'comunities.store': {
    methods: ["POST"],
    pattern: '/comunities',
    tokens: [{"old":"/comunities","type":0,"val":"comunities","end":""}],
    types: placeholder as Registry['comunities.store']['types'],
  },
  'comunities.show': {
    methods: ["GET","HEAD"],
    pattern: '/comunities/:id',
    tokens: [{"old":"/comunities/:id","type":0,"val":"comunities","end":""},{"old":"/comunities/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['comunities.show']['types'],
  },
  'comunities.edit': {
    methods: ["GET","HEAD"],
    pattern: '/comunities/:id/edit',
    tokens: [{"old":"/comunities/:id/edit","type":0,"val":"comunities","end":""},{"old":"/comunities/:id/edit","type":1,"val":"id","end":""},{"old":"/comunities/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['comunities.edit']['types'],
  },
  'comunities.update': {
    methods: ["PUT","PATCH"],
    pattern: '/comunities/:id',
    tokens: [{"old":"/comunities/:id","type":0,"val":"comunities","end":""},{"old":"/comunities/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['comunities.update']['types'],
  },
  'comunities.destroy': {
    methods: ["DELETE"],
    pattern: '/comunities/:id',
    tokens: [{"old":"/comunities/:id","type":0,"val":"comunities","end":""},{"old":"/comunities/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['comunities.destroy']['types'],
  },
  'attractives.images': {
    methods: ["GET","HEAD"],
    pattern: '/attractives/:id/images',
    tokens: [{"old":"/attractives/:id/images","type":0,"val":"attractives","end":""},{"old":"/attractives/:id/images","type":1,"val":"id","end":""},{"old":"/attractives/:id/images","type":0,"val":"images","end":""}],
    types: placeholder as Registry['attractives.images']['types'],
  },
  'attractives.index': {
    methods: ["GET","HEAD"],
    pattern: '/attractives',
    tokens: [{"old":"/attractives","type":0,"val":"attractives","end":""}],
    types: placeholder as Registry['attractives.index']['types'],
  },
  'attractives.create': {
    methods: ["GET","HEAD"],
    pattern: '/attractives/create',
    tokens: [{"old":"/attractives/create","type":0,"val":"attractives","end":""},{"old":"/attractives/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['attractives.create']['types'],
  },
  'attractives.store': {
    methods: ["POST"],
    pattern: '/attractives',
    tokens: [{"old":"/attractives","type":0,"val":"attractives","end":""}],
    types: placeholder as Registry['attractives.store']['types'],
  },
  'attractives.show': {
    methods: ["GET","HEAD"],
    pattern: '/attractives/:id',
    tokens: [{"old":"/attractives/:id","type":0,"val":"attractives","end":""},{"old":"/attractives/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['attractives.show']['types'],
  },
  'attractives.edit': {
    methods: ["GET","HEAD"],
    pattern: '/attractives/:id/edit',
    tokens: [{"old":"/attractives/:id/edit","type":0,"val":"attractives","end":""},{"old":"/attractives/:id/edit","type":1,"val":"id","end":""},{"old":"/attractives/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['attractives.edit']['types'],
  },
  'attractives.update': {
    methods: ["PUT","PATCH"],
    pattern: '/attractives/:id',
    tokens: [{"old":"/attractives/:id","type":0,"val":"attractives","end":""},{"old":"/attractives/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['attractives.update']['types'],
  },
  'attractives.destroy': {
    methods: ["DELETE"],
    pattern: '/attractives/:id',
    tokens: [{"old":"/attractives/:id","type":0,"val":"attractives","end":""},{"old":"/attractives/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['attractives.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
