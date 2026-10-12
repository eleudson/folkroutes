/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  dashboard: typeof routes['dashboard']
  categories: {
    index: typeof routes['categories.index']
    create: typeof routes['categories.create']
    store: typeof routes['categories.store']
    show: typeof routes['categories.show']
    edit: typeof routes['categories.edit']
    update: typeof routes['categories.update']
    destroy: typeof routes['categories.destroy']
  }
  types: {
    index: typeof routes['types.index']
    create: typeof routes['types.create']
    store: typeof routes['types.store']
    show: typeof routes['types.show']
    edit: typeof routes['types.edit']
    update: typeof routes['types.update']
    destroy: typeof routes['types.destroy']
  }
  localities: {
    index: typeof routes['localities.index']
    create: typeof routes['localities.create']
    store: typeof routes['localities.store']
    show: typeof routes['localities.show']
    edit: typeof routes['localities.edit']
    update: typeof routes['localities.update']
    destroy: typeof routes['localities.destroy']
  }
  comunities: {
    index: typeof routes['comunities.index']
    create: typeof routes['comunities.create']
    store: typeof routes['comunities.store']
    show: typeof routes['comunities.show']
    edit: typeof routes['comunities.edit']
    update: typeof routes['comunities.update']
    destroy: typeof routes['comunities.destroy']
  }
}
