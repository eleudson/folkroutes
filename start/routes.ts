/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'
// Importe o DashboardController
const DashboardController = () => import('#controllers/dashboard_controller')

const CategoriesController = () => import('#controllers/categories_controller')
const TypesController = () => import('#controllers/types_controller')
const LocalitiesController = () => import('#controllers/localities_controller')
const ComunitiesController = () => import('#controllers/comunities_controller')
const AttractivesController = () => import('#controllers/attractives_controller')

router.on('/').renderInertia('home', {}).as('home')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    // Apunte para o controller e método index
    router.get('/dashboard', [DashboardController, 'index']).as('dashboard')
  })
  .use(middleware.auth())
  
// Rota direta para renderizar a página de teste do Inertia
router.get('/teste-mapa-single', ({ inertia }) => {
  return inertia.render('map_test_single')
})

// Rota direta para renderizar a página de teste do Inertia
router.get('/teste-mapa', ({ inertia }) => {
  return inertia.render('map_test')
})

// CRUD routes of Category
router.resource('categories', CategoriesController)

// CRUD routes of Category
router.resource('types', TypesController)

// CRUD routes of Locality
router.resource('localities', LocalitiesController)

// CRUD routes of Comunity
router.resource('comunities', ComunitiesController)

// CRUD routes of Attractive
router.resource('attractives', AttractivesController)
