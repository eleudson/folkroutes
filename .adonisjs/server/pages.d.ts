import '@adonisjs/inertia/types'

import type React from 'react'
import type { Prettify } from '@adonisjs/core/types/common'

type ExtractProps<T> =
  T extends React.FC<infer Props>
    ? Prettify<Omit<Props, 'children'>>
    : T extends React.Component<infer Props>
      ? Prettify<Omit<Props, 'children'>>
      : never

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'auth/login': ExtractProps<(typeof import('../../inertia/pages/auth/login.tsx'))['default']>
    'auth/signup': ExtractProps<(typeof import('../../inertia/pages/auth/signup.tsx'))['default']>
    'categories/create': ExtractProps<(typeof import('../../inertia/pages/categories/create.tsx'))['default']>
    'categories/edit': ExtractProps<(typeof import('../../inertia/pages/categories/edit.tsx'))['default']>
    'categories/index': ExtractProps<(typeof import('../../inertia/pages/categories/index.tsx'))['default']>
    'dashboard': ExtractProps<(typeof import('../../inertia/pages/dashboard.tsx'))['default']>
    'errors/not_found': ExtractProps<(typeof import('../../inertia/pages/errors/not_found.tsx'))['default']>
    'errors/server_error': ExtractProps<(typeof import('../../inertia/pages/errors/server_error.tsx'))['default']>
    'home': ExtractProps<(typeof import('../../inertia/pages/home.tsx'))['default']>
    'map_test_single': ExtractProps<(typeof import('../../inertia/pages/map_test_single.tsx'))['default']>
    'map_test': ExtractProps<(typeof import('../../inertia/pages/map_test.tsx'))['default']>
    'types/create': ExtractProps<(typeof import('../../inertia/pages/types/create.tsx'))['default']>
    'types/edit': ExtractProps<(typeof import('../../inertia/pages/types/edit.tsx'))['default']>
    'types/index': ExtractProps<(typeof import('../../inertia/pages/types/index.tsx'))['default']>
  }
}
