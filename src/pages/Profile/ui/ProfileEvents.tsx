import { Plus } from "lucide-react";
import { Link } from "react-router";

import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

import { ProfileEventsList } from "./ProfileEventsList";

export const ProfileEvents = () => {
  return (
    <>
      <div className="bg-surface-container-low rounded-3xl p-4 drop-shadow-lg">
        <div className="relative grid grid-cols-[1fr_3fr_1fr]">
          <h3 className="text-center text-base font-semibold col-2">
            Мои события
          </h3>
          <Button className="w-fit h-[22px] ml-auto" variant="ghost" asChild>
            <Link to={routes.eventNew}>
              <Plus className="text-primary size-[24px]" />
            </Link>
          </Button>
        </div>
        <ProfileEventsList />
      </div>
    </>
  );
};
