import React from 'react'
import { Link, useForm } from '@inertiajs/react'

interface Category {
  id: number
  name: string
}

export default function Create({ categories }: { categories: Category[] }) {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    description: '',
    categoryId: categories[0]?.id || '',
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/types')
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Novo Tipo de Recurso</h1>

      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Categoria Pai</label>
          <select 
            value={data.categoryId} 
            onChange={e => setData('categoryId', Number(e.target.value))}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="">Selecione uma categoria...</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.categoryId && <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '5px' }}>{errors.categoryId}</div>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nome do Tipo</label>
          <input 
            type="text" 
            value={data.name} 
            onChange={e => setData('name', e.target.value)} 
            placeholder="Ex: Trilha Ecológica, Gastronomia Local..."
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

        <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
          <button 
            type="submit" 
            disabled={processing}
            style={{ padding: '10px 15px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            {processing ? 'Salvando...' : 'Salvar Tipo'}
          </button>
          
          <Link 
            href="/types" 
            style={{ padding: '10px 15px', backgroundColor: '#e5e7eb', color: '#374151', textDecoration: 'none', borderRadius: '5px' }}
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
