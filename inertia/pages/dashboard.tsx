import React from 'react'
import { Link } from '@inertiajs/react'
import AdminLayout from '~/layouts/AdminLayout'

interface DashboardProps {
  stats?: {
    categories: number
    types: number
    localities: number
    comunities: number
    attractives: number
  }
}

export default function Dashboard({ stats = { categories: 0, types: 0, localities: 0, comunities: 0, attractives: 0 } }: DashboardProps) {
  const cards = [
    { title: 'Categorias', count: stats.categories ?? 0, href: '/categories', color: '#2563eb', bg: '#eff6ff', description: 'Categorias de recursos turísticos' },
    { title: 'Tipos', count: stats.types ?? 0, href: '/types', color: '#7c3aed', bg: '#f5f3ff', description: 'Subcategorias e especificações' },
    { title: 'Localidades', count: stats.localities ?? 0, href: '/localities', color: '#059669', bg: '#ecfdf5', description: 'Distritos e unidades geográficas' },
    { title: 'Comunidades', count: stats.comunities ?? 0, href: '/comunities', color: '#d97706', bg: '#fffbeb', description: 'Associações e grupos gestores' },
    { title: 'Atrativos Turísticos', count: stats.attractives ?? 0, href: '/attractives', color: '#dc2626', bg: '#fef2f2', description: 'Pontos e atrativos pontuados' },
  ]

  return (
    <AdminLayout>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>Painel Administrativo</h1>
        <p style={{ margin: '6px 0 0 0', color: '#6b7280' }}>
          Visão geral dos registros cadastrados no portal FolkRoutes.
        </p>
      </div>

      {/* Grid de Cards Sintéticos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        {cards.map((card) => (
          <div
            key={card.href}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            <div>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase' }}>
                {card.title}
              </span>
              <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: card.color, margin: '8px 0' }}>
                {card.count}
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: '#9ca3af' }}>{card.description}</p>
            </div>

            <Link
              href={card.href}
              style={{
                marginTop: '1rem',
                padding: '8px 0',
                textAlign: 'center',
                backgroundColor: card.bg,
                color: card.color,
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '13px',
              }}
            >
              Gerenciar {card.title} &rarr;
            </Link>
          </div>
        ))}
      </div>

      {/* Seção de Atalhos Rápidos */}
      <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#111827' }}>Ações Rápidas de Manutenção</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            href="/attractives/create"
            style={{ padding: '10px 16px', backgroundColor: '#2563eb', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}
          >
            + Cadastrar Atrativo Turístico
          </Link>
          <Link
            href="/localities/create"
            style={{ padding: '10px 16px', backgroundColor: '#059669', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}
          >
            + Cadastrar Localidade
          </Link>
          <Link
            href="/comunities/create"
            style={{ padding: '10px 16px', backgroundColor: '#d97706', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}
          >
            + Cadastrar Comunidade
          </Link>
        </div>
      </div>
    </AdminLayout>
  )
}
