import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet' // <-- Adicionado useMap
import L from 'leaflet'

import defaultIcon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

export interface MapMarker {
  id: string | number
  latitude: number
  longitude: number
  title?: string
  iconUrl?: string
}

interface MapProps {
  markers: MapMarker[]
  centerLatitude?: number
  centerLongitude?: number
  zoom?: number
}

// ------------------------------------------------------------------------
// NOVO SUBCOMPONENTE: Fica escutando os marcadores e enquadra o mapa
// ------------------------------------------------------------------------
function MapBounds({ markers }: { markers: MapMarker[] }) {
  const map = useMap()

  useEffect(() => {
    // Se não tiver mapa, ou não tiver marcadores, aborta.
    if (!map || markers.length === 0) return

    try {
      const coordinates = markers.map((marker) => [marker.latitude, marker.longitude] as [number, number])
      const bounds = L.latLngBounds(coordinates)
      
      // Só aplica o zoom se os bounds forem válidos
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] })
      }
    } catch (error) {
      console.error("Erro ao calcular os limites do mapa:", error)
    }
  }, [markers, map])

  return null
}
// ------------------------------------------------------------------------
export default function Map({ markers = [], centerLatitude, centerLongitude, zoom = 13 }: MapProps) {
  const defaultLat = centerLatitude || (markers.length > 0 ? markers[0].latitude : -6.3597)
  const defaultLng = centerLongitude || (markers.length > 0 ? markers[0].longitude : -39.2979)
  const centerPosition: [number, number] = [defaultLat, defaultLng]

  const getIcon = (customIconUrl?: string) => {
    return L.icon({
      iconUrl: customIconUrl || defaultIcon,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    })
  }

  return (
    <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
      <MapContainer 
        center={centerPosition} 
        zoom={zoom} 
        scrollWheelZoom={false} 
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Adicionando nosso subcomponente invisível dentro do Container do mapa */}
        <MapBounds markers={markers} />
        
        {markers.map((marker) => (
          <Marker 
            key={marker.id} 
            position={[marker.latitude, marker.longitude]}
            icon={getIcon(marker.iconUrl)}
          >
            {marker.title && (
              <Popup>{marker.title}</Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}