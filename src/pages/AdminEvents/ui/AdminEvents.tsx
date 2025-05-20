import { ContentHeader } from "@/widgets/ContentHeader";

import { Search } from "@/shared/icons/Search";
import { Input } from "@/shared/ui/input";

import { useEventsController } from "../controllers/useEventsController";
import { EventCard } from "./EventCard";

export const AdminEvents = () => {
  const { events, handleDelete, search, setSearch } = useEventsController();

  return (
    <>
      <ContentHeader
        withBackArrow={false}
        className="md:hidden block py-2"
        title="Список мероприятий"
        titleClassName="text-right"
      />
      <main className="h-full flex-1 flex flex-col gap-6 p-2 pt-4 md:pt-2 w-full mx-auto md:px-20 lg:max-w-1/2">
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          variant="secondary"
          placeholder="Поиск по по названию"
          startIcon={Search}
          iconProps={{
            className: "text-primary",
          }}
          className="pl-10 py-2 bg-[#F4F4F0]"
        />
        <div className="w-full mx-auto grid grid-flow row auto-rows-fr gap-4 p-2">
          {events.map((event) => (
            <EventCard event={event} onDelete={handleDelete} />
          ))}
        </div>
      </main>
    </>
  );
};
