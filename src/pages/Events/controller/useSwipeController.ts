import { type PanInfo, useAnimation } from "framer-motion";
import { useState } from "react";

export const useSwipeController = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const controls = useAnimation();

  const handleDragEnd = async (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 100;
    const velocity = info.velocity.x;

    if (
      activeTab === "upcoming" &&
      (info.offset.x > threshold || velocity > 1000)
    ) {
      controls.start({ x: 0 });
      return;
    }

    if (
      activeTab === "past" &&
      (info.offset.x < -threshold || velocity < -1000)
    ) {
      controls.start({ x: 0 });
      return;
    }

    if (info.offset.x < -threshold || velocity < -1000) {
      await controls.start({ x: "-100%" });
      setActiveTab("past");
      controls.set({ x: 0 });
    } else if (info.offset.x > threshold || velocity > 1000) {
      await controls.start({ x: "100%" });
      setActiveTab("upcoming");
      controls.set({ x: 0 });
    } else {
      controls.start({ x: 0 });
    }
  };

  return { activeTab, setActiveTab, controls, handleDragEnd };
};
