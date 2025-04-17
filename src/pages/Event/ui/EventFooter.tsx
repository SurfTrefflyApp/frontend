import type { Event } from "@/entities/Event";
import { useUnit } from "effector-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

import { $isAuth } from "@/shared/auth";
import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

import {
  subscribeEvent,
  subscribeFx,
  unsubscribeEvent,
  unsubscribeFx,
} from "../model/store";

interface EventFooter {
  event: Event;
}

export const EventFooter = ({ event }: EventFooter) => {
  const isAuth = useUnit($isAuth);
  const subscribe = useUnit(subscribeEvent);
  const subscribing = useUnit(subscribeFx.pending);
  const unsubscribe = useUnit(unsubscribeEvent);
  const unsubscribing = useUnit(unsubscribeFx.pending);

  const getFooterContent = (): ReactNode => {
    if (!isAuth) {
      return (
        <p>
          Для записи на мероприятие необходимо{" "}
          <Link to={routes.welcome} className="text-[#0073FF]">
            войти
          </Link>{" "}
          в аккаунт
        </p>
      );
    }

    if (event.isOwner) {
      return <></>;
    }
    if (event.isParticipant) {
      return (
        <Button
          loading={unsubscribing}
          onClick={() => {
            unsubscribe(event.id);
          }}
        >
          Покинуть мероприятие
        </Button>
      );
    }
    if (!event.isParticipant) {
      return (
        <Button
          loading={subscribing}
          onClick={() => {
            subscribe(event.id);
          }}
        >
          Присоединиться
        </Button>
      );
    }

    return <></>;
  };

  return (
    <footer className="[&:not(:has(*))]:hidden text-center leading-none mt-4 mb-6 font-semibold text-sm">
      {getFooterContent()}
    </footer>
  );
};
