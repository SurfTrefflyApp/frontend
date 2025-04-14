import { Link } from "react-router";

import { Add } from "@/shared/icons/Add";
import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

import { ProfileEventsList } from "./ProfileEventsList";

export const ProfileEvents = () => {
  return (
    <>
      <div className="bg-surface-container-low rounded-3xl shadow-lg">
        <div className="relative grid grid-cols-[1fr_3fr_1fr] items-center p-4 pb-0">
          <h3 className="text-center text-base font-semibold col-2">
            Мои события
          </h3>
          <Button className="w-fit h-[22px] ml-auto" variant="ghost" asChild>
            <Link to={routes.eventNew}>
              <Add className="text-primary size-[20px]" />
            </Link>
          </Button>
        </div>
        <ProfileEventsList />
      </div>
    </>
  );
};
