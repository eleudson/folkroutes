import React from 'react'
import { Link, useForm } from '@inertiajs/react'

interface Category {
  id: number
  name: string
  description: string | null
}

export default function Edit({ category }: { category: Category }) {
  const { data, setData, put, processing, errors } = useForm({
    name: category.name || '',
    description: category.description || '',
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // Envia os dados atualizados para a rota de update
    put(`/categories/${category.id}`)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Editar Categoria: {category.name}</h1>
      
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nome da Categoria</label>
          <input 
            type="text" 
            value={data.name} 
            onChange={e => setData('name', e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {/* Exibe o erro do nome, se houver */}
          {errors.name && <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '5px' }}>{errors.name}</div>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Descrição</label>
          <textarea 
            value={data.description} 
            onChange={e => setData('description', e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }}
          />
          {/* Exibe o erro da descrição, se houver */}
          {errors.description && <div style={{ color: '#dc2626', fontSize: '14px', marginTop: '5px' }}>{errors.description}</div>}
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
          <button 
            type="submit" 
            disabled={processing}
            style={{ padding: '10px 15px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            {processing ? 'Atualizando...' : 'Atualizar Categoria'}
          </button>
          
          <Link 
            href="/categories" 
            style={{ padding: '10px 15px', backgroundColor: '#e5e7eb', color: '#374151', textDecoration: 'none', borderRadius: '5px' }}
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
