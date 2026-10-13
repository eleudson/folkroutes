import React from 'react'
import { Link, router } from '@inertiajs/react'
import { calculateTourismMetrics } from '~/utils/scores'

interface Type {
  id: number
  name: string
  category?: { name: string }
}

interface Locality {
  id: number
  name: string
}

interface Attractive {
  id: number
  name: string
  description: string
  type?: Type
  locality?: Locality
  scoreInfluenceOfTheClimate: number
  scorePhysicalExertion: number
  scoreSecurity: number
  scoreConveniences: number
  scoreDifficultyOfAccess: number
  scoreInterpretiveDiversity: number
}

export default function Index({ attractives }: { attractives: Attractive[] }) {
  const handleDelete = (id: number) => {
    if (confirm('Deseja realmente remover este atrativo turístico?')) {
      router.delete(`/attractives/${id}`)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: 0 }}>Atrativos Turísticos</h1>
          <p style={{ margin: '5px 0 0 0', color: '#6b7280' }}>
            Atrativos e potencial vocacional do Turismo de Base Comunitária
          </p>
        </div>
        <Link
          href="/attractives/create"
          style={{ padding: '10px 18px', backgroundColor: '#2563eb', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}
        >
          + Novo Atrativo
        </Link>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6', borderBottom: '2px solid #e5e7eb' }}>
            <th style={{ padding: '12px' }}>Atrativo</th>
            <th style={{ padding: '12px' }}>Categoria / Tipo</th>
            <th style={{ padding: '12px' }}>Localidade</th>
            <th style={{ padding: '12px' }}>Avaliação Vocacional</th>
            <th style={{ padding: '12px' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {attractives.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                Nenhum atrativo cadastrado no momento.
              </td>
            </tr>
          ) : (
            attractives.map((item) => {
              const metrics = calculateTourismMetrics(item)

              return (
                <tr key={item.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{item.name}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ fontSize: '13px', color: '#4b5563' }}>
                      {item.type?.category?.name ? `${item.type.category.name} > ` : ''}
                      <strong>{item.type?.name || 'Sem tipo'}</strong>
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>{item.locality?.name || 'Não informada'}</td>
                  <td style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          backgroundColor: metrics.badgeBg,
                          color: metrics.badgeColor,
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                        }}
                      >
                        {metrics.vocation} | {metrics.incidence}
                      </span>
                      <small style={{ color: '#6b7280', fontSize: '11px' }}>
                        Média dos Scores: <strong>{metrics.average}</strong> / 2.00
                      </small>
                    </div>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <Link href={`/attractives/${item.id}`} style={{ color: '#2563eb', marginRight: '12px', textDecoration: 'none' }}>
                      Ver / Detalhes
                    </Link>
                    <Link href={`/attractives/${item.id}/edit`} style={{ color: '#d97706', marginRight: '12px', textDecoration: 'none' }}>
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}
