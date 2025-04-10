import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import Pin from "@/shared/icons/pin.svg";

import { useMapController } from "../lib/useMapController";

export const MapWithSearch = () => {
  const { coordinates, isLoading, handleMapClick } = useMapController();

  return (
    <div className="px-4 pb-4 h-full">
      <YMaps query={{ lang: "ru_RU" }}>
        <div className="relative w-full h-full min-h-[500px]">
          <Map
            state={{ center: coordinates, zoom: 9 }}
            width="100%"
            height="100%"
            onClick={handleMapClick}
            options={{
              suppressMapOpenBlock: true,
              yandexMapDisablePoiInteractivity: true,
            }}
          >
            <Placemark
              geometry={coordinates}
              options={{
                iconLayout: "default#image",
                iconImageHref: Pin,
                iconImageSize: [40, 40],
                iconImageOffset: [-20, -40],
                hasBalloon: false,
              }}
            />
          </Map>
          {isLoading && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.7)",
              }}
            >
              <div>Загрузка...</div>
            </div>
          )}
        </div>
      </YMaps>
    </div>
  );
};
