import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import Pin from "@/shared/icons/pin.svg";

import { useMapController } from "../lib/useMapController";

export const SelectPageMap = () => {
  const { coordinates, handleMapClick } = useMapController();

  return (
    <div className="relative w-full h-full flex-1">
      <YMaps
        query={{
          lang: "ru_RU",
        }}
      >
        <div
          className="relative w-full h-full"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        >
          <Map
            state={{
              center: coordinates,
              zoom: 10,
              behaviors: ["default", "scrollZoom"],
            }}
            modules={["control.FullscreenControl", "control.TypeSelector"]}
            width="100%"
            height="100%"
            onClick={handleMapClick}
            options={{
              suppressMapOpenBlock: true,
              yandexMapDisablePoiInteractivity: true,
              suppressObsoleteBrowserNotifier: true,
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
