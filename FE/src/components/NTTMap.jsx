/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import coffeeMarkerIcon from '../assets/coffe-circle.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default markers in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Custom coffee marker icon
const createCoffeeIcon = (size = [32, 32]) => {
  return L.icon({
    iconUrl: coffeeMarkerIcon,
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1] / 2],
    popupAnchor: [0, -size[1] / 2],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
    shadowAnchor: [13, 41]
  });
};

// Component to set map bounds
function MapBounds({ bounds }) {
  const map = useMap();
  
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [map, bounds]);
  
  return null;
}

// Component to handle GeoJSON layer
function NTTGeoJSONLayer({ onRegionClick }) {
  const map = useMap();
  const [geoJsonLayer, setGeoJsonLayer] = useState(null);

  useEffect(() => {
    const fetchGeoJSON = async () => {
      try {
        // Fetch data from the provided URL
        const response = await fetch('https://sigi.pu.go.id/portalpupr/rest/services/Rakowbangwil_2023_v1_MIL1/FeatureServer/113/query?where=1%3D1&outFields=*&outSR=4326&f=geojson');
        const geoJsonData = await response.json();
        
        // Create GeoJSON layer
        const layer = L.geoJSON(geoJsonData, {
          style: {
            fillColor: '#9AD7E5',
            weight: 1,
            opacity: 1,
            color: '#7BC3D1',
            fillOpacity: 0.7
          },
          onEachFeature: (feature, layer) => {
            // Add click event to each region
            layer.on('click', (e) => {
              if (onRegionClick) {
                onRegionClick(feature, e);
              }
            });
            
            // Add hover effects
            layer.on('mouseover', (e) => {
              const layer = e.target;
              layer.setStyle({
                weight: 2,
                fillOpacity: 0.9,
                fillColor: '#E2F4F7'
              });
            });
            
            layer.on('mouseout', (e) => {
              const layer = e.target;
              layer.setStyle({
                weight: 1,
                fillOpacity: 0.7,
                fillColor: '#9AD7E5'
              });
            });
          }
        });
        
        // Add layer to map
        layer.addTo(map);
        setGeoJsonLayer(layer);
        
        // Don't auto-fit to GeoJSON bounds to keep focus on coffee markers area
        
      } catch (error) {
        console.error('Error fetching GeoJSON:', error);
      }
    };

    fetchGeoJSON();

    // Cleanup
    return () => {
      if (geoJsonLayer) {
        map.removeLayer(geoJsonLayer);
      }
    };
  }, [map, onRegionClick]);

  return null;
}

const NTTMap = ({ className = "" }) => {
  const mapRef = useRef();
  const [selectedRegion, setSelectedRegion] = useState(null);
  
  // NTT region coordinates focused on coffee marker areas
  const nttCenter = [-8.65, 121.5]; // Centered around Maumere and coffee locations
  // Handle region click
  const handleRegionClick = (feature) => {
    setSelectedRegion(feature);
    console.log('Region clicked:', feature.properties);
    
    // You can add custom logic here for when a region is clicked
    // For example, showing more information about the region
  };

  // Coffee locations in NTT
  const locations = [
    {
      id: 'maumere',
      name: 'Maumere',
      subtitle: 'Our Factory',
      coordinates: [-8.618, 122.213], // Maumere, Flores
      description: 'The heart of our production, where quality control and craft roasting begin.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop'
    },
    {
      id: 'bajawa',
      name: 'Bajawa Ngada',
      subtitle: 'Coffee Farm',
      coordinates: [-8.798, 120.897], // Bajawa, Ngada
      description: 'High altitude coffee cultivation with traditional farming methods.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop'
    },
    {
      id: 'manggarai',
      name: 'Manggarai',
      subtitle: 'Coffee Farm',
      coordinates: [-8.528, 120.458], // Ruteng, Manggarai
      description: 'Premium arabica beans grown in the volcanic highlands.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop'
    }
  ];

  const coffeeIcon = createCoffeeIcon([40, 40]);

  return (
    <div className={`relative ${className}`}>
      <style jsx>{`
        .leaflet-map {
          background: #f8f9fa;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
        }
        .leaflet-control-zoom a {
          background-color: white !important;
          color: #666 !important;
          border: none !important;
        }
        .leaflet-control-attribution {
          background: rgba(255,255,255,0.8) !important;
          font-size: 10px !important;
        }
      `}</style>
      <MapContainer
        ref={mapRef}
        center={nttCenter}
        zoom={8}
        style={{ 
          height: '400px', 
          width: '100%', 
          borderRadius: '12px',
          border: '1px solid #e5e7eb'
        }}
        zoomControl={true}
        scrollWheelZoom={true}
        dragging={true}
        doubleClickZoom={true}
        className="leaflet-map"
      >
        {/* Custom styled map tiles for cleaner look */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        {/* NTT GeoJSON Layer */}
        <NTTGeoJSONLayer onRegionClick={handleRegionClick} />

        {/* Coffee location markers */}
        {locations.map((location) => (
          <Marker 
            key={location.id}
            position={location.coordinates} 
            icon={coffeeIcon}
          >
            <Popup 
              maxWidth={300}
              className="coffee-popup"
            >
              <div className="p-2">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={location.image}
                    alt={`${location.name} location`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-xs uppercase text-flores-primary/70 font-body tracking-wide">
                      {location.subtitle}
                    </h4>
                    <h3 className="text-lg font-bold text-flores-primary font-heading">
                      {location.name}
                    </h3>
                  </div>
                </div>
                <p className="text-flores-primary/80 text-sm font-body leading-relaxed mb-3">
                  {location.description}
                </p>
                <button className="w-full px-4 py-2 bg-flores-primary text-white rounded-lg text-sm hover:bg-flores-primary/90 transition-colors duration-300 font-body font-medium">
                  Learn More
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Selected Region Info Panel */}
      {selectedRegion && (
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg max-w-xs">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-flores-primary">
              {selectedRegion.properties.NAMOBJ || selectedRegion.properties.NAME || 'NTT Region'}
            </h3>
            <button 
              onClick={() => setSelectedRegion(null)}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            {selectedRegion.properties.REMARK && (
              <p><span className="font-medium">Type:</span> {selectedRegion.properties.REMARK}</p>
            )}
            {selectedRegion.properties.KETERANGAN && (
              <p><span className="font-medium">Info:</span> {selectedRegion.properties.KETERANGAN}</p>
            )}
            <p className="text-xs text-gray-500 mt-2">Click on other regions to explore</p>
          </div>
        </div>
      )}
      
      {/* Map legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border" style={{backgroundColor: '#9AD7E5', borderColor: '#7BC3D1'}}></div>
            <span className="text-flores-primary font-medium">NTT Regions</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={coffeeMarkerIcon} alt="Coffee location" className="w-4 h-4" />
            <span className="text-flores-primary font-medium">Coffee Locations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NTTMap;