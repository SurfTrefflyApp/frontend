import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import Pin from "@/shared/icons/pin.svg";

import { useMapController } from "../lib/useMapController";

export const SelectPageMap = () => {
  const { coordinates, handleMapClick } = useMapController();

  return (
    <div className="px-4 pb-4 h-full overflow-hidden">
      <YMaps
        query={{
          lang: "ru_RU",
        }}
      >
        <div className="relative w-full h-full min-h-[500px]">
          <Map
            state={{ center: coordinates, zoom: 10 }}
            modules={["control.FullscreenControl", "control.TypeSelector"]}
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
        </div>
      </YMaps>
    </div>
  );
};
