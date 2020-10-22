import React from "react";
import { MapContext, MapContextProps } from "../contexts/MapContext";
import { Place } from "../reducers/trip";

type MapContextContainerProps = {
  children: React.ReactNode;
};

export function MapContextContainer({ children }: MapContextContainerProps) {
  const [lat, setLat] = React.useState(-0.481747846041145);
  const [lng, setLng] = React.useState(51.3233379650232);
  const [places, setPlaces] = React.useState<Place[]>([]);
  const context: MapContextProps = {
    lat,
    lng,
    setLatLng: (lat, lng) => {
      setLat(lat);
      setLng(lng);
    },
    places,
    setPlaces: (places: Place[]) => setPlaces(places),
  };
  return <MapContext.Provider value={context}>{children}</MapContext.Provider>;
}
