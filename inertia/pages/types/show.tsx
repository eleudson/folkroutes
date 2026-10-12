import React from 'react'
import { Link } from '@inertiajs/react'

interface Category {
  id: number
  name: string
}

interface Type {
  id: number
  name: string
  description: string
  category?: Category
}

export default function Show({ type }: { type: Type }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1>Detalhes do Tipo</h1>
        <Link 
          href="/types" 
          style={{ padding: '10px 15px', backgroundColor: '#e5e7eb', color: '#374151', textDecoration: 'none', borderRadius: '5px' }}
        >
          Voltar para Lista
        </Link>
      </div>

      <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <div style={{ marginBottom: '1rem' }}>
          <span style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 'bold' }}>Categoria Associada</span>
          <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#2563eb' }}>{type.category?.name || 'Sem Categoria'}</p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <span style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 'bold' }}>Nome do Tipo</span>
          <h2 style={{ margin: '5px 0 0 0', color: '#111827' }}>{type.name}</h2>
        </div>

        <div>
          <span style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 'bold' }}>Descrição</span>
          <p style={{ margin: '5px 0 0 0', color: '#374151', lineHeight: '1.5' }}>{type.description || 'Sem descrição cadastrada.'}</p>
        </div>
      </div>
    </div>
  )
}
