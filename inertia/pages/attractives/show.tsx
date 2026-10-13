import React from 'react'
import { Link } from '@inertiajs/react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { SCORE_MAP, SCORE_LABELS, calculateTourismMetrics } from '~/utils/scores'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})
L.Marker.prototype.options.icon = DefaultIcon

interface Attractive {
  id: number
  name: string
  description: string
  latitude: number
  longitude: number
  appreciation: string | null
  type?: { name: string; category?: { name: string } }
  locality?: { name: string }
  scoreInfluenceOfTheClimate: number
  scorePhysicalExertion: number
  scoreSecurity: number
  scoreConveniences: number
  scoreDifficultyOfAccess: number
  scoreInterpretiveDiversity: number
}

export default function Show({ attractive }: { attractive: Attractive }) {
  const position: [number, number] = [attractive.latitude, attractive.longitude]
  const metrics = calculateTourismMetrics(attractive)

  const scores = [
    { key: 'scoreInfluenceOfTheClimate', value: attractive.scoreInfluenceOfTheClimate },
    { key: 'scorePhysicalExertion', value: attractive.scorePhysicalExertion },
    { key: 'scoreSecurity', value: attractive.scoreSecurity },
    { key: 'scoreConveniences', value: attractive.scoreConveniences },
    { key: 'scoreDifficultyOfAccess', value: attractive.scoreDifficultyOfAccess },
    { key: 'scoreInterpretiveDiversity', value: attractive.scoreInterpretiveDiversity },
  ]

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      {/* Cabeçalho */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <span style={{ fontSize: '13px', color: '#2563eb', fontWeight: 'bold' }}>
            {attractive.type?.category?.name} &gt; {attractive.type?.name}
          </span>
          <h1 style={{ margin: '4px 0 0 0' }}>{attractive.name}</h1>
          <p style={{ margin: '4px 0 0 0', color: '#6b7280' }}>Localidade: {attractive.locality?.name}</p>
        </div>
        <Link href="/attractives" style={{ padding: '10px 16px', backgroundColor: '#e5e7eb', color: '#374151', textDecoration: 'none', borderRadius: '6px' }}>
          Voltar
        </Link>
      </div>

      {/* Descrição e Apreciação Qualitativa */}
      <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '2rem' }}>
        <h3 style={{ marginTop: 0 }}>Descrição do Atrativo</h3>
        <p style={{ color: '#374151', lineHeight: '1.6' }}>{attractive.description}</p>

        {attractive.appreciation && (
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
            <h4 style={{ margin: '0 0 6px 0', color: '#1f2937' }}>Apreciação Qualitativa Comunitária</h4>
            <p style={{ margin: 0, fontStyle: 'italic', color: '#4b5563' }}>"{attractive.appreciation}"</p>
          </div>
        )}
      </div>

      {/* Seção de Pontuações */}
      <h3 style={{ marginBottom: '1rem' }}>Detalhamento das Pontuações Individuais</h3>

      {/* Quadro de Média, Incidência e Vocação */}
      <div
        style={{
          backgroundColor: metrics.badgeBg,
          borderLeft: `6px solid ${metrics.borderColor}`,
          padding: '1.2rem 1.5rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <h3 style={{ margin: 0, color: metrics.badgeColor, fontSize: '1.25rem' }}>
            {metrics.vocation} &bull; {metrics.incidence}
          </h3>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#374151' }}>
            Escala calculada com base na média ponderada dos 6 critérios de atratividade do TBC.
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '12px', color: '#4b5563', textTransform: 'uppercase', fontWeight: 'bold' }}>Média Geral</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: metrics.badgeColor }}>
            {metrics.average} <span style={{ fontSize: '1rem', color: '#6b7280' }}>/ 2.00</span>
          </div>
        </div>
      </div>

      {/* Detalhamento das Notas Individuais */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {scores.map(({ key, value }) => {
          const badge = SCORE_MAP[value]
          return (
            <div key={key} style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
              <span style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>{SCORE_LABELS[key]}</span>
              <span style={{ backgroundColor: badge.bg, color: badge.color, padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                {badge.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Localização no Mapa Leaflet */}
      <h3 style={{ marginBottom: '1rem' }}>Localização Geográfica</h3>
      <div style={{ border: '2px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
        <MapContainer center={position} zoom={15} style={{ height: '380px', width: '100%', zIndex: 0 }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <strong>{attractive.name}</strong> <br />
              {attractive.locality?.name}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}
