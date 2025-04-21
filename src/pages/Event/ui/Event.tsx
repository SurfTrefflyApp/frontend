import { ContentHeader } from "@/widgets/ContentHeader";
import { useUnit } from "effector-react";
import { Calendar } from "lucide-react";
import { Link } from "react-router";

import { Copy } from "@/shared/icons/Copy";
import { DefaultUser } from "@/shared/icons/DefaultUser";
import { Edit } from "@/shared/icons/Edit";
import { LockClose } from "@/shared/icons/LockClose";
import { LockOpen } from "@/shared/icons/LockOpen";
import { People } from "@/shared/icons/People";
import { Pin } from "@/shared/icons/Pin";
import { Share } from "@/shared/icons/Share";
import { formatDateWithIntl } from "@/shared/lib/formatDateWithIntl";
import { routes } from "@/shared/router";
import { EventImagePreview } from "@/shared/ui/EventImagePreview";
import { ExpandableText } from "@/shared/ui/ExpandableText";
import { NotFound } from "@/shared/ui/NotFound";
import { Tag } from "@/shared/ui/Tag";
import { Button } from "@/shared/ui/button";

import { useEventController } from "../controller/useEventController";
import { $event } from "../model/store";
import { EventFooter } from "./EventFooter";
import { EventMap } from "./EventMap";
import { EventSkeleton } from "./EventSkeleton";

export const Event = () => {
  const event = useUnit($event);
  const { handleAddressCopy, handleEventLinkCopy, loading } =
    useEventController();

  if (loading) {
    return <EventSkeleton />;
  }

  if (!event) {
    return <NotFound />;
  }

  const isPrivate = event.isPrivate;

  return (
    <div className="lg:w-1/3 lg:mx-auto overflow-y-auto no-scrollbar">
      <ContentHeader
        className="py-2"
        title={event.name}
        rightContent={
          <div className="flex items-center gap-4">
            {event.isOwner && (
              <Link to={routes.eventEdit.replace(":id", event.id.toString())}>
                <Edit className="size-[16px]" />
              </Link>
            )}
            <Button
              variant="ghost"
              onClick={handleEventLinkCopy}
              className="p-0"
            >
              <Share />
            </Button>
          </div>
        }
      />
      <main className="p-3 py-6 flex flex-col gap-5">
        <EventImagePreview className="aspect-video" />
        <section
          className={`text-center flex justify-center items-center flex-wrap gap-2 gap-x-6
        bg-surface-container-low rounded-3xl p-4 shadow-lg mb-4`}
        >
          {event.tags.map(({ id, name }) => (
            <Tag key={id} name={name} variant="static" />
          ))}
        </section>
        <section>
          <h1 className="text-xl font-medium mb-1">{event.name}</h1>
          <div className="flex gap-2 items-center text-xl">
            <Calendar className="text-primary" size={16} />
            <h2>{formatDateWithIntl(event.date)}</h2>
          </div>
          <div className="flex gap-2 items-center text-xl">
            {isPrivate ? <LockClose /> : <LockOpen className="size-[16px]" />}
            <h2>{isPrivate ? "Приватное" : "Открытое"}</h2>
          </div>
          <div className="flex gap-2 items-center text-xl">
            <People className="size-[16px]" />
            <h2>
              {event.participantCount}/{event.capacity}
            </h2>
          </div>
        </section>
        <section>
          <h2 className="text-xl mb-2">Описание</h2>
          <ExpandableText text={event.description} />
        </section>
        <section>
          <div className="text-sm font-semibold flex items-center gap-1">
            <Pin className="size-[30px]" />
            <h2 className="flex-1">{event.address}</h2>
            <Button variant="ghost" onClick={handleAddressCopy}>
              <Copy className="size-[30px]" />
            </Button>
          </div>
          <div className="flex overflow-hidden">
            <EventMap coordinates={[event.latitude, event.longitude]} />
          </div>
        </section>
        <section>
          {event.isOwner ? (
            <h3 className="text-sm">Организатором являетесь вы</h3>
          ) : (
            <>
              <h2 className="text-sm font-semibold mb-2">Организатор:</h2>
              <div className="flex items-center gap-2">
                <DefaultUser className="size-[50px]" />
                <h3 className="text-sm">{event.ownerUsername ?? "Имя"}</h3>
              </div>
            </>
          )}
        </section>
        <EventFooter event={event} />
      </main>
    </div>
  );
};
