import { ErrorServer } from "@/shared/icons/ErrorServer";
import { ErrorLayout } from "@/shared/ui/ErrorLayout";

export const Timeout = () => {
  return (
    <ErrorLayout
      icon={<ErrorServer />}
      title="Ошибка сервера"
      subtitle={
        <>
          Что-то пошло не так.
          <br />
          Попробуй позже.
        </>
      }
      subtitleClassName=""
      titleIconClassName="text-error"
    />
  );
};
