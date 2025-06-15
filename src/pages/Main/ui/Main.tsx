import { EventsCarousel } from "@/widgets/EventsCarousel";
import { EventsHorizontalList } from "@/widgets/EventsHorizontalList";

import { useStatusBarColor } from "@/shared/dom/useStatusBarColor";
import { NotFound } from "@/shared/ui/NotFound";

import { useMainController } from "../controller/useMainController";

export const Main = () => {
  const { data, loading } = useMainController();

  useStatusBarColor("--background");

  if (
    !loading &&
    (!data ||
      (!data?.latest.length &&
        !data?.popular &&
        !data?.recommended &&
        !data?.premium))
  ) {
    return <NotFound />;
  }

  return (
    <main
      className="w-full md:px-20 max-w-7xl lg:mx-auto px-2 pb-4 gap-8 [&>*]:mb-4 [&>*:last-child]:mb-0 overflow-x-hidden"
      style={{
        WebkitOverflowScrolling: "touch",
        transform: "translateZ(0)",
      }}
    >
      <div className="w-full pt-2">
        <EventsCarousel events={data?.premium} isLoading={loading} />
      </div>
      <EventsHorizontalList
        title="Популярные события"
        events={data?.popular}
        isLoading={loading}
      />
      <EventsHorizontalList
        title="Возможно, тебе понравится"
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
