import { Error as ErrorIcon } from "@/shared/icons/Error";
import { ErrorLayout } from "@/shared/ui/ErrorLayout";

export const Error = () => {
  return (
    <ErrorLayout
      icon={<ErrorIcon />}
      title="Здесь что-то не так"
      subtitle="Перезагрузите приложение и попробуйте позже"
      titleIconClassName="text-error"
    />
  );
};
