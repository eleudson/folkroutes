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
}
