import React from 'react'
import { Link, useForm } from '@inertiajs/react'

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
  latitude: number
  longitude: number
  typeId: number
  localityId: number
  appreciation: string | null
  scoreInfluenceOfTheClimate: number
  scorePhysicalExertion: number
  scoreSecurity: number
  scoreConveniences: number
  scoreDifficultyOfAccess: number
  scoreInterpretiveDiversity: number
}

export default function Edit({ attractive, types, localities }: { attractive: Attractive; types: Type[]; localities: Locality[] }) {
  const { data, setData, put, processing, errors } = useForm({
    name: attractive.name || '',
    description: attractive.description || '',
    latitude: attractive.latitude || '',
    longitude: attractive.longitude || '',
    typeId: attractive.typeId || types[0]?.id || '',
    localityId: attractive.localityId || localities[0]?.id || '',
    appreciation: attractive.appreciation || '',
    scoreInfluenceOfTheClimate: attractive.scoreInfluenceOfTheClimate ?? 0,
    scorePhysicalExertion: attractive.scorePhysicalExertion ?? 0,
    scoreSecurity: attractive.scoreSecurity ?? 1,
    scoreConveniences: attractive.scoreConveniences ?? 0,
    scoreDifficultyOfAccess: attractive.scoreDifficultyOfAccess ?? 0,
    scoreInterpretiveDiversity: attractive.scoreInterpretiveDiversity ?? 1,
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    put(`/attractives/${attractive.id}`)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Editar Atrativo: {attractive.name}</h1>

      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Nome do Atrativo</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          {errors.name && <span style={{ color: '#dc2626', fontSize: '13px' }}>{errors.name}</span>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Tipo de Recurso</label>
            <select
              value={data.typeId}
              onChange={(e) => setData('typeId', Number(e.target.value))}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            >
              {types.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.category?.name ? `${t.category.name} > ` : ''}{t.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Localidade</label>
            <select
              value={data.localityId}
              onChange={(e) => setData('localityId', Number(e.target.value))}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            >
              {localities.map((l) => (
                <option key={l.id} value={l.id}>{l.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Latitude</label>
            <input
              type="number"
              step="any"
              value={data.latitude}
              onChange={(e) => setData('latitude', Number(e.target.value))}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Longitude</label>
            <input
              type="number"
              step="any"
              value={data.longitude}
              onChange={(e) => setData('longitude', Number(e.target.value))}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Descrição</label>
          <textarea
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            rows={3}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Apreciação Qualitativa</label>
          <textarea
            value={data.appreciation}
            onChange={(e) => setData('appreciation', e.target.value)}
            rows={2}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Seleção de Métricas */}
        <fieldset style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
          <legend style={{ fontWeight: 'bold', padding: '0 8px' }}>Métricas de Avaliação do TBC</legend>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold' }}>Influência do Clima</label>
              <select value={data.scoreInfluenceOfTheClimate} onChange={(e) => setData('scoreInfluenceOfTheClimate', Number(e.target.value))} style={{ width: '100%', padding: '8px' }}>
                <option value={0}>0 - Baixa</option>
                <option value={1}>1 - Média</option>
                <option value={2}>2 - Alta</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold' }}>Esforço Físico</label>
              <select value={data.scorePhysicalExertion} onChange={(e) => setData('scorePhysicalExertion', Number(e.target.value))} style={{ width: '100%', padding: '8px' }}>
                <option value={0}>0 - Mínimo</option>
                <option value={1}>1 - Moderado</option>
                <option value={2}>2 - Elevado</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold' }}>Segurança</label>
              <select value={data.scoreSecurity} onChange={(e) => setData('scoreSecurity', Number(e.target.value))} style={{ width: '100%', padding: '8px' }}>
                <option value={0}>0 - Baixa</option>
                <option value={1}>1 - Média</option>
                <option value={2}>2 - Alta</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold' }}>Conveniências</label>
              <select value={data.scoreConveniences} onChange={(e) => setData('scoreConveniences', Number(e.target.value))} style={{ width: '100%', padding: '8px' }}>
                <option value={0}>0 - Baixa</option>
                <option value={1}>1 - Média</option>
                <option value={2}>2 - Alta</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold' }}>Dificuldade de Acesso</label>
              <select value={data.scoreDifficultyOfAccess} onChange={(e) => setData('scoreDifficultyOfAccess', Number(e.target.value))} style={{ width: '100%', padding: '8px' }}>
                <option value={0}>0 - Fácil</option>
                <option value={1}>1 - Médio</option>
                <option value={2}>2 - Difícil</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold' }}>Diversidade Interpretativa</label>
              <select value={data.scoreInterpretiveDiversity} onChange={(e) => setData('scoreInterpretiveDiversity', Number(e.target.value))} style={{ width: '100%', padding: '8px' }}>
                <option value={0}>0 - Pontual</option>
                <option value={1}>1 - Moderada</option>
                <option value={2}>2 - Ampla</option>
              </select>
            </div>
          </div>
        </fieldset>

        <div style={{ display: 'flex', gap: '12px', marginTop: '1rem' }}>
          <button
            type="submit"
            disabled={processing}
            style={{ padding: '10px 20px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {processing ? 'Atualizando...' : 'Atualizar Atrativo'}
          </button>
          <Link href="/attractives" style={{ padding: '10px 20px', backgroundColor: '#e5e7eb', color: '#374151', textDecoration: 'none', borderRadius: '6px' }}>
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
