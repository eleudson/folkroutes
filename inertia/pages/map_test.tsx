import React from 'react'
import { Link } from '@inertiajs/react'
import Map, { MapMarker } from '../components/Map'

export default function MapTest() {
  // 5 locais conhecidos em Iguatu, CE
  const iguatuMarkers: MapMarker[] = [
    {
      id: 1,
      latitude: -6.3588,
      longitude: -39.2965,
      title: 'Igreja Matriz de Senhora Sant\'Ana',
      // Usa o ícone azul padrão
    },
    {
      id: 2,
      latitude: -6.3621,
      longitude: -39.3001,
      title: 'Antiga Estação Ferroviária (Praça da Criança)',
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
    },
    {
      id: 3,
      latitude: -6.3646,
      longitude: -39.3035,
      title: 'Terminal Rodoviário de Iguatu',
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'
    },
    {
      id: 4,
      latitude: -6.3773,
      longitude: -39.2687,
      title: 'IFCE - Campus Iguatu',
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png'
    },
    {
      id: 5,
      latitude: -6.3768,
      longitude: -39.2949,
      title: 'Parque de Exposições / URCA',
      // Usa o ícone azul padrão
    }
  ]

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Conhecendo Iguatu 📍</h1>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>
        O mapa calculará a distância entre o IFCE (mais afastado) e o centro da cidade, ajustando o zoom automaticamente para enquadrar todos os 5 pontos.
      </p>
      
      <div style={{ border: '2px solid #e5e7eb', borderRadius: '10px', padding: '1rem', backgroundColor: '#f9fafb' }}>
        <Map markers={iguatuMarkers} />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}