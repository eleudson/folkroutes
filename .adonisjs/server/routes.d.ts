import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'categories.index': { paramsTuple?: []; params?: {} }
    'categories.create': { paramsTuple?: []; params?: {} }
    'categories.store': { paramsTuple?: []; params?: {} }
    'categories.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categories.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categories.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categories.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.index': { paramsTuple?: []; params?: {} }
    'types.create': { paramsTuple?: []; params?: {} }
    'types.store': { paramsTuple?: []; params?: {} }
    'types.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.index': { paramsTuple?: []; params?: {} }
    'localities.create': { paramsTuple?: []; params?: {} }
    'localities.store': { paramsTuple?: []; params?: {} }
    'localities.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.index': { paramsTuple?: []; params?: {} }
    'comunities.create': { paramsTuple?: []; params?: {} }
    'comunities.store': { paramsTuple?: []; params?: {} }
    'comunities.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.index': { paramsTuple?: []; params?: {} }
    'attractives.create': { paramsTuple?: []; params?: {} }
    'attractives.store': { paramsTuple?: []; params?: {} }
    'attractives.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'categories.index': { paramsTuple?: []; params?: {} }
    'categories.create': { paramsTuple?: []; params?: {} }
    'categories.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categories.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.index': { paramsTuple?: []; params?: {} }
    'types.create': { paramsTuple?: []; params?: {} }
    'types.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.index': { paramsTuple?: []; params?: {} }
    'localities.create': { paramsTuple?: []; params?: {} }
    'localities.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.index': { paramsTuple?: []; params?: {} }
    'comunities.create': { paramsTuple?: []; params?: {} }
    'comunities.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.index': { paramsTuple?: []; params?: {} }
    'attractives.create': { paramsTuple?: []; params?: {} }
    'attractives.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'categories.index': { paramsTuple?: []; params?: {} }
    'categories.create': { paramsTuple?: []; params?: {} }
    'categories.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categories.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.index': { paramsTuple?: []; params?: {} }
    'types.create': { paramsTuple?: []; params?: {} }
    'types.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.index': { paramsTuple?: []; params?: {} }
    'localities.create': { paramsTuple?: []; params?: {} }
    'localities.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.index': { paramsTuple?: []; params?: {} }
    'comunities.create': { paramsTuple?: []; params?: {} }
    'comunities.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.index': { paramsTuple?: []; params?: {} }
    'attractives.create': { paramsTuple?: []; params?: {} }
    'attractives.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'categories.store': { paramsTuple?: []; params?: {} }
    'types.store': { paramsTuple?: []; params?: {} }
    'localities.store': { paramsTuple?: []; params?: {} }
    'comunities.store': { paramsTuple?: []; params?: {} }
    'attractives.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'categories.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'categories.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'categories.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'types.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'localities.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'comunities.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'attractives.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}