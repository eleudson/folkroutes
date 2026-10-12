import React from 'react'
import { Link } from '@inertiajs/react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Correção do ícone padrão do Leaflet que costuma "sumir" no React
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})
L.Marker.prototype.options.icon = DefaultIcon

interface Comunity {
  id: number
  name: string
  description: string
  latitude: number
  longitude: number
}

export default function Show({ comunity }: { comunity: Comunity }) {
  // Converte as coordenadas para o formato exigido pelo Leaflet [latitude, longitude]
  const position: [number, number] = [comunity.latitude, comunity.longitude]

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1>Detalhes da Localidade</h1>
        <Link 
          href="/comunities" 
          style={{ padding: '10px 15px', backgroundColor: '#e5e7eb', color: '#374151', textDecoration: 'none', borderRadius: '5px' }}
        >
          Voltar para Lista
        </Link>
      </div>

      <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #e5e7eb' }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#111827' }}>{comunity.name}</h2>
        <p style={{ margin: '0 0 15px 0', color: '#4b5563' }}>{comunity.description}</p>
        <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: '#6b7280' }}>
          <span><strong>Latitude:</strong> {comunity.latitude}</span>
          <span><strong>Longitude:</strong> {comunity.longitude}</span>
        </div>
      </div>

      {/* Container do Mapa */}
      <div style={{ border: '2px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
        <MapContainer 
          center={position} 
          zoom={14} 
          style={{ height: '400px', width: '100%', zIndex: 0 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <strong>{comunity.name}</strong> <br />
              Este é o local cadastrado.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}
