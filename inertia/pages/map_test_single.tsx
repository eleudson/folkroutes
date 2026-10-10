import React from 'react'
import { Link } from '@inertiajs/react'
import Map from '../components/MapSingle' // Importando o mapa que você criou

export default function MapTest() {
  // Coordenadas de Iguatu, CE
  const testLatitude = -6.3597
  const testLongitude = -39.2979

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Teste do React Leaflet 🗺️</h1>
      <p>Se o mapa aparecer abaixo com um marcador, a instalação foi um sucesso!</p>
      
      <div style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '1rem', marginTop: '1rem' }}>
        {/* Renderizando o componente Map */}
        <Map 
          latitude={testLatitude} 
          longitude={testLongitude} 
          title="Olá de Iguatu, Ceará!" 
        />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}