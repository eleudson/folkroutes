import React from 'react'
import { Link, router } from '@inertiajs/react'

interface Locality {
  id: number
  name: string
  description: string
  latitude: number
  longitude: number
}

export default function Index({ localities }: { localities: Locality[] }) {
  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir esta localidade?')) {
      router.delete(`/localities/${id}`)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Localidades (Pontos no Mapa)</h1>
        <Link 
          href="/localities/create" 
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
          {localities.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                Nenhuma localidade cadastrada.
              </td>
            </tr>
          ) : (
            localities.map((locality) => (
              <tr key={locality.id}>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{locality.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{locality.latitude}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{locality.longitude}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                  <Link href={`/localities/${locality.id}`} style={{ color: '#2563eb', marginRight: '10px', textDecoration: 'none' }}>Ver no Mapa</Link>
                  <Link href={`/localities/${locality.id}/edit`} style={{ color: '#d97706', marginRight: '10px', textDecoration: 'none' }}>Editar</Link>
                  <button onClick={() => handleDelete(locality.id)} style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Excluir</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
