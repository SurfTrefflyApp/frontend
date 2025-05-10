import { ContentHeader } from "@/widgets/ContentHeader";
import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

import { useSwipeController } from "../controller/useSwipeController";
import { EventsPast } from "./EventsPast";
import { EventsUpcoming } from "./EventsUpcoming";

export const Events = () => {
  const { activeTab, setActiveTab, controls, handleDragEnd } =
    useSwipeController();

  return (
    <main className="h-full flex flex-col overflow-auto no-scrollbar">
      <ContentHeader
        withBackArrow={false}
        title="Мероприятия"
        className="md:hidden"
      />
      <Tabs
        defaultValue="upcoming"
        className="gap-10 flex-1"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="w-full flex justify-evenly pt-8">
          <TabsTrigger value="upcoming" className="w-fit">
            Предстоящие
          </TabsTrigger>
          <TabsTrigger value="past">Прошедшие</TabsTrigger>
        </TabsList>
        <div className="p-2 flex-1 md:mx-auto lg:w-2/4 flex">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            className="flex w-full md:hidden"
            style={{ x: 0 }}
          >
            <div className="h-fit flex w-full md:hidden">
              <EventsTabs />
            </div>
          </motion.div>
          <div className="h-fit w-full hidden md:flex">
            <EventsTabs />
          </div>
        </div>
      </Tabs>
    </main>
  );
};

export const EventsTabs = () => {
  return (
    <>
      <TabsContent
        value="upcoming"
        className="grid grid-flow-row auto-rows-fr gap-4"
      >
        <EventsUpcoming />
      </TabsContent>
      <TabsContent
        value="past"
        className="grid grid-flow-row auto-rows-fr gap-4"
      >
        <EventsPast />
      </TabsContent>
    </>
  );
};
