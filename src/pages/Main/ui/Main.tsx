import { EventsCarousel } from "@/widgets/EventsCarousel";
import { EventsHorizontalList } from "@/widgets/EventsHorizontalList";

import { useEventsFetch } from "@/pages/Main/api/useEventsFetch";

export const Main = () => {
  const { data, loading } = useEventsFetch();

  return (
    <main className="h-inherit mx-auto max-w-[600px] pl-2 pb-4 gap-8 [&>*]:mb-4 [&>*:last-child]:mb-0">
      <div className="w-full p-2 pl-0">
        <EventsCarousel events={data?.premium} isLoading={loading} />
      </div>
      <EventsHorizontalList
        title="Популярные мероприятия"
        events={data?.popular}
        isLoading={loading}
      />
      <EventsHorizontalList
        title="Возможно, вам понравится"
        events={data?.recommended}
        isLoading={loading}
      />
      <EventsHorizontalList
        title="Самые новые"
        events={data?.latest}
        isLoading={loading}
      />
    </main>
  );
};
