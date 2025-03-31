import { useUnit } from "effector-react";
import { motion } from "framer-motion";

import { endAnimation } from "@/pages/Splash/model/splash";

import { Title } from "@/shared/icons/Title";

import Left from "./assets/left.svg";
import Right from "./assets/right.svg";

export const Splash = () => {
  const stop = useUnit(endAnimation);

  return (
    <>
      <img
        src={Left}
        className="absolute left-[-4px] bottom-[-4px] select-none"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{
            duration: 2,
          }}
          onAnimationComplete={stop}
        >
          <Title className="w-[300px] h-full" />
        </motion.div>
      </div>
      <img
        src={Right}
        className="absolute right-[-4px] top-[-4px] select-none"
      />
    </>
  );
};
