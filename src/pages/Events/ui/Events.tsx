import { ContentHeader } from "@/widgets/ContentHeader";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

import { EventsPast } from "./EventsPast";
import { EventsUpcoming } from "./EventsUpcoming";

export const Events = () => {
  return (
    <main className="h-full flex flex-col">
      <ContentHeader withBackArrow={false} title="Мероприятия" />
      <Tabs defaultValue="upcoming" className="gap-10 flex-1">
        <TabsList className="w-full flex justify-evenly pt-8">
          <TabsTrigger value="upcoming" className="w-fit">
            Предстоящие
          </TabsTrigger>
          <TabsTrigger value="past">Прошедшие</TabsTrigger>
        </TabsList>
        <div className="p-2 flex-1">
          <TabsContent value="upcoming" className="h-full flex flex-col gap-4">
            <EventsUpcoming />
          </TabsContent>
          <TabsContent value="past" className="h-full flex flex-col gap-4">
            <EventsPast />
          </TabsContent>
        </div>
      </Tabs>
    </main>
  );
};
