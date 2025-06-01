import type { Event } from "@/entities/Event";
import { useUnit } from "effector-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

import { $isAuth } from "@/shared/auth";
import { isDateInPast } from "@/shared/lib/dateUtils";
import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

import { usePremiumController } from "../controller/usePremiumController";
import { subscribeEvent, subscribeFx } from "../model/store";
import { EventUnsubscribeConfirm } from "./EventUnsubsribeConfirm";

interface EventFooter {
  event: Event;
}

export const EventFooter = ({ event }: EventFooter) => {
  const isAuth = useUnit($isAuth);
  const subscribe = useUnit(subscribeEvent);
  const subscribing = useUnit(subscribeFx.pending);

  const { handlePremiumClick, loading } = usePremiumController(event.id);

  const getFooterContent = (): ReactNode => {
    if (isDateInPast(event.date)) {
      return <p className="text-center">Мероприятие завершено</p>;
    }

    if (!isAuth) {
      return (
        <p>
          Для записи на мероприятие необходимо{" "}
          <Link
            to={routes.welcome}
            className="text-[#0073FF] hover:opacity-60 active:opacity-60"
          >
            войти
          </Link>{" "}
          в аккаунт
        </p>
      );
    }

    if (event.isOwner && !event.isPremium) {
      return (
        <Button onClick={handlePremiumClick} loading={loading}>
          Сделать премиальным
        </Button>
      );
    }

    if (event.isOwner) {
      return <></>;
    }

    if (event.isParticipant) {
      return <EventUnsubscribeConfirm eventId={event.id} />;
    }

    if (event.capacity <= event.participantCount) {
      return (
        <p className="text-center">
          Достигнут лимит участников, ты сможешь присоединиться, если один из
          участников покинет меропритие
        </p>
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
