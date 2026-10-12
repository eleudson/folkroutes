import React from 'react'
import { Link, router } from '@inertiajs/react'

interface Comunity {
  id: number
  name: string
  description: string
  latitude: number
  longitude: number
}

export default function Index({ comunities }: { comunities: Comunity[] }) {
  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir esta comunidade?')) {
      router.delete(`/comunities/${id}`)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Comunidades (Pontos no Mapa)</h1>
        <Link 
          href="/comunities/create" 
          style={{ padding: '10px 15px', backgroundColor: '#2563eb', color: 'white', textDecoration: 'none', borderRadius: '5px' }}
        >
          + Nova Localidade
        </Link>
      </div>

      <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6', textAlign: 'left' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Nome</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Latitude</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Longitude</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {comunities.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                Nenhuma comunidade cadastrada.
              </td>
            </tr>
          ) : (
            comunities.map((comunity) => (
              <tr key={comunity.id}>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{comunity.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{comunity.latitude}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{comunity.longitude}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                  <Link href={`/comunities/${comunity.id}`} style={{ color: '#2563eb', marginRight: '10px', textDecoration: 'none' }}>Ver no Mapa</Link>
                  <Link href={`/comunities/${comunity.id}/edit`} style={{ color: '#d97706', marginRight: '10px', textDecoration: 'none' }}>Editar</Link>
                  <button onClick={() => handleDelete(comunity.id)} style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Excluir</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
