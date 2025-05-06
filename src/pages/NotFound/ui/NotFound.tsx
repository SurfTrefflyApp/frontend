import { NotFound as NotFoundIcon } from "@/shared/icons/NotFound";
import { ErrorLayout } from "@/shared/ui/ErrorLayout";

export const NotFound = () => {
  return (
    <ErrorLayout
      icon={<NotFoundIcon />}
      title="Ничего не найдено"
      subtitle={
        <>
          Мы не смогли ничего найти
          <br />
          Попробуй снова
        </>
      }
    />
  );
};
