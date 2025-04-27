import type { Event } from "@/entities/Event";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useUnit } from "effector-react";
import { Loader } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router";

import Pin from "@/shared/icons/pin.svg";
import { routes } from "@/shared/router";
import { AdaptivePopover } from "@/shared/ui/AdaptivePopover";
import { EventCard } from "@/shared/ui/EventCard";

import { $events } from "../model/events";

export const EventsSearchMap = () => {
  const events = useUnit($events);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [mapLoading, setMapLoading] = useState(true);
  const [mapState, setMapState] = useState({
    center: [51.6606, 39.2006] as [number, number],
    zoom: 11,
  });

  const placeMarks = useMemo(
    () =>
      events.map((event) => (
        <Placemark
          key={event.id}
          geometry={[event.latitude, event.longitude]}
          onClick={() => {
            setSelectedEvent(event);
          }}
          options={{
            iconLayout: "default#image",
            iconImageHref: Pin,
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40],
            hasBalloon: false,
          }}
        />
      )),
    [events],
  );

  return (
    <>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 overflow-hidden">
          {mapLoading && <Loader className="mx-auto my-8" />}
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
                  state={mapState}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onBoundsChange={(e: any) => {
                    const newCenter = e.get("newCenter");
                    const newZoom = e.get("newZoom");
                    setMapState({
                      center: newCenter,
                      zoom: newZoom,
                    });
                  }}
                  onLoad={() => {
                    setMapLoading(false);
                  }}
                  modules={[
                    "control.FullscreenControl",
                    "control.TypeSelector",
                  ]}
                  width="100%"
                  height="100%"
                  options={{
                    suppressMapOpenBlock: true,
                    yandexMapDisablePoiInteractivity: true,
                    suppressObsoleteBrowserNotifier: true,
                  }}
                >
                  {placeMarks}
                </Map>
              </div>
            </YMaps>
          </div>
        </div>
      </div>
      {selectedEvent && (
        <AdaptivePopover
          open={!!selectedEvent}
          setOpen={() => {
            setSelectedEvent(null);
          }}
          footer={
            <Link
              to={routes.event.replace(":id", selectedEvent.id.toString())}
              className="text-center text-primary block w-full"
            >
              На страницу мероприятия
            </Link>
          }
        >
          <EventCard
            event={selectedEvent}
            containerClassName="bg-transparent"
            linkClassName="pointer-events-none"
          />
        </AdaptivePopover>
      )}
    </>
  );
};
