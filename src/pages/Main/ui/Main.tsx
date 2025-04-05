import { EventsCarousel } from "@/widgets/EventsCarousel";

import { useEventsFetch } from "@/pages/Main/api/useEventsFetch";

export const Main = () => {
  const { data } = useEventsFetch();

  return (
    <main className="mx-auto max-w-[600px]">
      <div className="w-full p-2">
        <EventsCarousel events={data?.premium ?? []} />
      </div>
    </main>
  );
};
