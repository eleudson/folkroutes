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
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
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
