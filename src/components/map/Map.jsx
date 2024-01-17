import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker.jsx";
import SetViewOnClick from "./SetViewOnClick.jsx";
import reactLeaflet from "/icons/reactLeaflet.svg";

export default function Map({ allRestaurants }) {
  const markers = allRestaurants.map((rest) => {
    return <MapMarker key={rest.restaurantId} restaurant={rest} />;
  });

  return (
    <MapContainer
      center={[33.84440287913099, -118.00018674505877]}
      zoom={1}
      minZoom={17}
      maxZoom={20}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution={`&copy; <img id="react-leaflet-logo" src=${reactLeaflet} alt="" /> <a href="https://react-leaflet.js.org/">React Leaflet</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
        url={`https://tile.openstreetmap.org/{z}/{x}/{y}.png`}
        maxZoom={22}
        detectRetina={true}
      />

      {/* <TileLayer
        attribution={`&copy; <img id="react-leaflet-logo" src=${reactLeaflet} alt="" /> <a href="https://react-leaflet.js.org/">React-Leaflet</a>, &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`}
        url={`https://tile.jawg.io/4e5e0597-933c-486d-a47a-d1c2733c8fb3/{z}/{x}/{y}{r}.png?access-token=${
          import.meta.env.VITE_JAWG_API_KEY
        }`}
        maxZoom={22}
        detectRetina={true}
      /> */}

      {/* <TileLayer
        attribution={`&copy; <img id="react-leaflet-logo" src=${reactLeaflet} alt="" /> <a href="https://react-leaflet.js.org/">React-Leaflet</a>, &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`}
        url={`https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=${
          import.meta.env.VITE_THUNDERFOREST_API_KEY
        }`}
        maxZoom={22}
        detectRetina={true}
      /> */}

      {/* <TileLayer
        attribution={`&copy; <img id="react-leaflet-logo" src=${reactLeaflet} alt="" /> <a href="https://react-leaflet.js.org/">React-Leaflet</a>, &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`}
        url={`https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=${
          import.meta.env.VITE_THUNDERFOREST_API_KEY
        }`}
        maxZoom={22}
        detectRetina={true}
      />

      <TileLayer
        attribution={`&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`}
        url="https://tiles.stadiamaps.com/tiles/stamen_terrain_labels/{z}/{x}/{y}{r}.{ext}"
        maxZoom={22}
        ext="png"
        detectRetina={true}
      /> */}
      <SetViewOnClick animateRef={true} />
      {markers}
    </MapContainer>
  );
}
