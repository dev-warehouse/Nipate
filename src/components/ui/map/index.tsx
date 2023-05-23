import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export interface MapLocation {
  latitude: number
  longitude: number
}

export function MapView({ className = '' }: MapContainerProps) {
  return (
    <MapContainer
      className={[className, 'w-full h-full'].join(' ')}
      center={[51.505, -0.09]}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />
    </MapContainer>
  )
}
