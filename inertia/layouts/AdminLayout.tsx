import React from 'react'
import { Link, usePage } from '@inertiajs/react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { url } = usePage()

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Categorias', href: '/categories' },
    { label: 'Tipos', href: '/types' },
    { label: 'Localidades', href: '/localities' },
    { label: 'Comunidades', href: '/comunities' },
    { label: 'Atrativos', href: '/attractives' },
  ]

  const isActive = (path: string) => url === path || url.startsWith(path + '/')

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'sans-serif' }}>
      {/* Barra de Navegação Superior */}
      <header style={{ backgroundColor: '#1e293b', color: 'white', padding: '0 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#38bdf8' }}>FolkRoutes Admin</span>
            
            <nav style={{ display: 'flex', gap: '0.5rem' }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '6px',
                    color: isActive(item.href) ? '#ffffff' : '#94a3b8',
                    backgroundColor: isActive(item.href) ? '#334155' : 'transparent',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: isActive(item.href) ? 'bold' : 'normal',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <form action="/logout" method="POST" style={{ margin: 0 }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                Sair
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Conteúdo da Página */}
      <main style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        {children}
      </main>
    </div>
  )
}
