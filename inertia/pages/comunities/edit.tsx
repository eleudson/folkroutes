import React from 'react'
import { Link, useForm } from '@inertiajs/react'

interface Comunity {
  id: number
  name: string
  description: string
  latitude: number
  longitude: number
}

export default function Edit({ comunity }: { comunity: Comunity }) {
  const { data, setData, put, processing, errors } = useForm({
    name: comunity.name || '',
    description: comunity.description || '',
    latitude: comunity.latitude || '',
    longitude: comunity.longitude || ''
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    put(`/comunities/${comunity.id}`)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Editar Comunidade: {comunity.name}</h1>
      
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nome</label>
          <input 
            type="text" 
            value={data.name} 
            onChange={e => setData('name', e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {errors.name && <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '5px' }}>{errors.name}</div>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Descrição</label>
          <textarea 
            value={data.description} 
            onChange={e => setData('description', e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '80px' }}
          />
          {errors.description && <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '5px' }}>{errors.description}</div>}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Latitude</label>
            <input 
              type="number"
              step="any" 
              value={data.latitude} 
              onChange={e => setData('latitude', e.target.value)} 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.latitude && <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '5px' }}>{errors.latitude}</div>}
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Longitude</label>
            <input 
              type="number"
              step="any"
              value={data.longitude} 
              onChange={e => setData('longitude', e.target.value)} 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.longitude && <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '5px' }}>{errors.longitude}</div>}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
          <button 
            type="submit" 
            disabled={processing}
            style={{ padding: '10px 15px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            {processing ? 'Atualizando...' : 'Atualizar Comunidade'}
          </button>
          
          <Link 
            href="/comunities" 
            style={{ padding: '10px 15px', backgroundColor: '#e5e7eb', color: '#374151', textDecoration: 'none', borderRadius: '5px' }}
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
