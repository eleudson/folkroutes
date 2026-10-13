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

export default function Create({ types, localities }: { types: Type[]; localities: Locality[] }) {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    description: '',
    latitude: '',
    longitude: '',
    typeId: types[0]?.id || '',
    localityId: localities[0]?.id || '',
    appreciation: '',
    scoreInfluenceOfTheClimate: 0,
    scorePhysicalExertion: 0,
    scoreSecurity: 1,
    scoreConveniences: 0,
    scoreDifficultyOfAccess: 0,
    scoreInterpretiveDiversity: 1,
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/attractives')
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Novo Atrativo Turístico</h1>

      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1.5rem' }}>
        {/* Nome */}
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

        {/* Tipo e Localidade */}
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

        {/* Coordenadas */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Latitude</label>
            <input
              type="number"
              step="any"
              value={data.latitude}
              onChange={(e) => setData('latitude', e.target.value)}
              placeholder="-6.3110"
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
            {errors.latitude && <span style={{ color: '#dc2626', fontSize: '13px' }}>{errors.latitude}</span>}
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Longitude</label>
            <input
              type="number"
              step="any"
              value={data.longitude}
              onChange={(e) => setData('longitude', e.target.value)}
              placeholder="-39.4125"
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
            {errors.longitude && <span style={{ color: '#dc2626', fontSize: '13px' }}>{errors.longitude}</span>}
          </div>
        </div>

        {/* Descrição e Apreciação */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Descrição Objetiva</label>
          <textarea
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            rows={3}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          {errors.description && <span style={{ color: '#dc2626', fontSize: '13px' }}>{errors.description}</span>}
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>Apreciação Qualitativa (Opcional)</label>
          <textarea
            value={data.appreciation}
            onChange={(e) => setData('appreciation', e.target.value)}
            rows={2}
            placeholder="Observações sobre valor comunitário, histórico ou conservação..."
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Avaliações de Pontuação (Scores 0, 1, 2) */}
        <fieldset style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem', marginTop: '0.5rem' }}>
          <legend style={{ fontWeight: 'bold', padding: '0 8px', color: '#1f2937' }}>
            Métricas de Avaliação do TBC
          </legend>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Influência do Clima</label>
              <select
                value={data.scoreInfluenceOfTheClimate}
                onChange={(e) => setData('scoreInfluenceOfTheClimate', Number(e.target.value))}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value={0}>0 - Baixa / Nenhuma restrição</option>
                <option value={1}>1 - Média / Alterações sazonais</option>
                <option value={2}>2 - Alta / Forte dependência do clima</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Esforço Físico Exigido</label>
              <select
                value={data.scorePhysicalExertion}
                onChange={(e) => setData('scorePhysicalExertion', Number(e.target.value))}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value={0}>0 - Mínimo / Acessível a todos</option>
                <option value={1}>1 - Moderado / Caminhada regular</option>
                <option value={2}>2 - Elevado / Trilhas íngremes ou longas</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Nível de Segurança</label>
              <select
                value={data.scoreSecurity}
                onChange={(e) => setData('scoreSecurity', Number(e.target.value))}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value={0}>0 - Baixa / Requer atenção redobrada</option>
                <option value={1}>1 - Média / Requer condutor local</option>
                <option value={2}>2 - Alta / Ambiente seguro e controlado</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Conveniências e Apoio</label>
              <select
                value={data.scoreConveniences}
                onChange={(e) => setData('scoreConveniences', Number(e.target.value))}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value={0}>0 - Nenhuma estrutura</option>
                <option value={1}>1 - Estrutura básica/comunitária</option>
                <option value={2}>2 - Estrutura completa de atendimento</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Dificuldade de Acesso</label>
              <select
                value={data.scoreDifficultyOfAccess}
                onChange={(e) => setData('scoreDifficultyOfAccess', Number(e.target.value))}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value={0}>0 - Fácil / Asfalto ou vias diretas</option>
                <option value={1}>1 - Médio / Estradas não pavimentadas</option>
                <option value={2}>2 - Difícil / Apenas 4x4, barco ou a pé</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Diversidade Interpretativa</label>
              <select
                value={data.scoreInterpretiveDiversity}
                onChange={(e) => setData('scoreInterpretiveDiversity', Number(e.target.value))}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value={0}>0 - Pontual / Foco específico</option>
                <option value={1}>1 - Moderada / Múltiplos pontos de interesse</option>
                <option value={2}>2 - Ampla / Rica narrativa cultural e natural</option>
              </select>
            </div>
          </div>
        </fieldset>

        <div style={{ display: 'flex', gap: '12px', marginTop: '1rem' }}>
          <button
            type="submit"
            disabled={processing}
            style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {processing ? 'Salvando...' : 'Salvar Atrativo'}
          </button>
          <Link href="/attractives" style={{ padding: '10px 20px', backgroundColor: '#e5e7eb', color: '#374151', textDecoration: 'none', borderRadius: '6px' }}>
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
