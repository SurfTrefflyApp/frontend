import { NotFound as NotFoundIcon } from "@/shared/icons/NotFound";

import { ErrorLayout } from "./ErrorLayout";

export const NotFound = () => {
  return (
    <div className="error flex items-center justify-center h-full flex-1">
      <ErrorLayout
        icon={<NotFoundIcon className="size-[100px]" />}
        titleIconClassName="hidden"
        title="Ничего не найдено"
        titleClassName="text-xl"
        subtitle={
          <>
            Мы не смогли ничего найти
            <br />
            Попробуй снова
          </>
        }
        subtitleClassName="text-lg"
        containerClassName="grid-rows-[auto_1fr] gap-8 h-fit"
      />
    </div>
  );
};
