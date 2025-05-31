import type { Event } from "@/entities/Event";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import { useUnit } from "effector-react";
import { Loader } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router";

import { Arrow } from "@/shared/icons/Arrow";
import Pin from "@/shared/icons/pin.svg";
import { routes } from "@/shared/router";
import { AdaptivePopover } from "@/shared/ui/AdaptivePopover";
import { EventCard } from "@/shared/ui/EventCard";
import { Button } from "@/shared/ui/button";

import { $events, $userCoords, getUserPositionFx } from "../model/events";
import { EventsUserCoordsInfo } from "./EvetsUserCoordsInfo";

export const EventsSearchMap = () => {
  const events = useUnit($events);
  const [userCoords, userCoordsLoading] = useUnit([
    $userCoords,
    getUserPositionFx.pending,
  ]);

  const [coordsInfoDialogOpen, setCoordsInfoDialogOpen] = useState(false);
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

  const userPlacemark = userCoords && (
    <Placemark
      geometry={[userCoords.latitude, userCoords.longitude]}
      options={{
        iconLayout: "default#image",
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40],
        hasBalloon: false,
        preset: "islands#geolocationIcon",
      }}
    />
  );

  console.debug(userCoords);

  return (
    <>
      {mapLoading && <Loader className="mx-auto my-8" />}
      <div className="absolute left-0 top-0 right-0 bottom-0">
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
              "control.GeolocationControl",
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
            {userPlacemark}
            <Button
              className="fixed z-50 p-3! right-8 md:right-30 bottom-30 md:bottom-14 h-[48px] w-[48px]"
              variant="outline"
              loading={userCoordsLoading}
              onClick={() => {
                if (userCoords.latitude && userCoords.longitude) {
                  setMapState((prev) => ({
                    ...prev,
                    center: [
                      userCoords.latitude || mapState.center[0],
                      userCoords.longitude || mapState.center[1],
                    ],
                  }));
                } else {
                  setCoordsInfoDialogOpen(true);
                }
              }}
            >
              {!userCoordsLoading && (
                <Arrow color="black" className="h-full size-[20px]" />
              )}
              {!userCoordsLoading &&
                (!userCoords.latitude || !userCoords.longitude) && (
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div
                      className="absolute w-[calc(100%*1.414)] h-[2px] bg-secondary top-1/2 left-1/2"
                      style={{
                        transform: "translate(-50%, -50%) rotate(45deg)",
                        transformOrigin: "center",
                      }}
                    />
                  </div>
                )}
            </Button>
          </Map>
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
              className="text-center text-primary block w-full mb-4"
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
      {coordsInfoDialogOpen && (
        <EventsUserCoordsInfo
          open={coordsInfoDialogOpen}
          setOpen={setCoordsInfoDialogOpen}
        />
      )}
    </>
  );
};
