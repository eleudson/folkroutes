import React from 'react'
import { Link, router } from '@inertiajs/react'

interface Types {
  id: number
  name: string
  description: string | null
}

export default function Index({ types }: { types: Types[] }) {
  // Função para deletar um tipo
  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir esta tipo?')) {
      router.delete(`/types/${id}`)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Categorias</h1>
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
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>ID</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Nome</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Descrição</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {types.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                Nenhuma tipo cadastrada.
              </td>
            </tr>
          ) : (
            types.map((Types) => (
              <tr key={Types.id}>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{Types.id}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{Types.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{Types.description || '-'}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                  <Link href={`/types/${Types.id}/edit`} style={{ color: '#d97706', marginRight: '10px', textDecoration: 'none' }}>Editar</Link>
                  <button 
                    onClick={() => handleDelete(Types.id)} 
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
