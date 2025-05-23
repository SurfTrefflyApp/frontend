import { ContentHeader } from "@/widgets/ContentHeader";
import { useUnit } from "effector-react";
import { useEffect } from "react";

import { eventsInit } from "../controllers";
import { AdminEventsList } from "./AdminEventsList";
import { AdminEventsSearch } from "./AdminEventsSearch";

export const AdminEvents = () => {
  const initEvents = useUnit(eventsInit);

  useEffect(() => {
    initEvents();
  }, []);

  return (
    <>
      <ContentHeader
        withBackArrow={false}
        className="md:hidden block py-2"
        title="Список мероприятий"
        titleClassName="text-right"
      />
      <main className="h-full flex-1 flex flex-col gap-6 p-2 pt-4 md:pt-2 w-full mx-auto md:px-20 lg:max-w-1/2">
        <AdminEventsSearch />
        <AdminEventsList />
      </main>
    </>
  );
};
