import { Marker } from "react-leaflet";
import { Icon, setOptions } from "leaflet";
import MapPopup from "./MapPopup.jsx";

export default function MapMarker({ restaurant }) {
  let icon;
  if (
    restaurant.name === "Cantina Del Sur" ||
    restaurant.name === "Calico Saloon"
  ) {
    icon = new Icon({
      iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23a404fb&icon=local_bar&noWhiteCircle&apiKey=${
        import.meta.env.VITE_GEOAPIFY_KEY
      }`,
      iconAnchor: [10, 15],
      iconSize: [28, 40],
    });
  } else {
    icon = new Icon({
      iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23a404fb&icon=restaurant&noWhiteCircle&apiKey=${
        import.meta.env.VITE_GEOAPIFY_KEY
      }`,
      iconAnchor: [10, 15],
      iconSize: [28, 40],
    });
  }

  return (
    <Marker
      position={[restaurant.xCoord, restaurant.yCoord]}
      icon={icon}
      title={restaurant.name}
      riseOnHover={true}
    >
      <MapPopup restaurant={restaurant} />
    </Marker>
  );
}
