import { NetworkError } from "@/shared/icons/NetworkError";
import { ErrorLayout } from "@/shared/ui/ErrorLayout";

export const Offline = () => {
  return (
    <ErrorLayout
      icon={<NetworkError />}
      title="Здесь что-то не так"
      subtitle={"Отсутствует подключение к интернету  "}
    />
  );
};
