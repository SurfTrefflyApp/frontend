import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import Pin from "@/shared/icons/pin.svg";

export const EventMap = ({ coordinates }: { coordinates: number[] }) => {
  return (
    <div className="relative w-full aspect-video">
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
            width="100%"
            height="100%"
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
