import { EventsCarousel } from "@/widgets/EventsCarousel";
import { EventsHorizontalList } from "@/widgets/EventsHorizontalList";

import { useEventsFetch } from "@/pages/Main/api/useEventsFetch";

export const Main = () => {
  const { data } = useEventsFetch();

  return (
    <main className="h-inherit mx-auto max-w-[600px] pl-2 pb-4 gap-6 [&>*]:mb-4 [&>*:last-child]:mb-0">
      <div className="w-full p-2 pl-0">
        <EventsCarousel events={data?.premium ?? []} />
      </div>
      <EventsHorizontalList
        title="Популярные мероприятий"
        events={data?.popular ?? []}
      />
      <EventsHorizontalList
        title="Возможно, вам понравится"
        events={data?.recommended ?? []}
      />
      <EventsHorizontalList title="Самые новые" events={data?.new ?? []} />
    </main>
  );
};
