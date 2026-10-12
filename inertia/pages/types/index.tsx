import React from 'react'
import { Link, router } from '@inertiajs/react'

interface Category {
  id: number
  name: string
}

interface Type {
  id: number
  name: string
  description: string
  categoryId: number
  category?: Category
}

export default function Index({ types }: { types: Type[] }) {
  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este tipo?')) {
      router.delete(`/types/${id}`)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Tipos de Recursos Turísticos</h1>
        <Link 
          href="/types/create" 
          style={{ padding: '10px 15px', backgroundColor: '#2563eb', color: 'white', textDecoration: 'none', borderRadius: '5px' }}
        >
          + Novo Tipo
        </Link>
      </div>

      <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6', textAlign: 'left' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Nome</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Categoria</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Descrição</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {types.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                Nenhum tipo cadastrado.
              </td>
            </tr>
          ) : (
            types.map((type) => (
              <tr key={type.id}>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>{type.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                  <span style={{ backgroundColor: '#e0e7ff', color: '#3730a3', padding: '3px 8px', borderRadius: '12px', fontSize: '13px' }}>
                    {type.category?.name || 'Sem Categoria'}
                  </span>
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{type.description}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                  <Link href={`/types/${type.id}`} style={{ color: '#2563eb', marginRight: '10px', textDecoration: 'none' }}>Ver</Link>
                  <Link href={`/types/${type.id}/edit`} style={{ color: '#d97706', marginRight: '10px', textDecoration: 'none' }}>Editar</Link>
                  <button 
                    onClick={() => handleDelete(type.id)} 
                    style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
