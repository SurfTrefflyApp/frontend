import { Plus } from "@/shared/icons/Plus";
import { Button } from "@/shared/ui/button";

export const ProfileEvents = () => {
  return (
    <>
      <div className="bg-surface-container-low rounded-3xl p-4 drop-shadow-lg">
        <div className="relative mb-4">
          <h3 className="text-center text-base font-semibold">Мои события</h3>
          <Button
            className="absolute top-1 right-0 p-0! h-[22px]"
            variant="ghost"
          >
            <Plus />
          </Button>
        </div>
        <div className="text-center">Пока не нашлось Ваших мероприятий</div>
      </div>
    </>
  );
};
