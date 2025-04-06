import { Title } from "@/shared/icons/Title";
import { cn } from "@/shared/lib/utils";

interface EventImagePreview {
  className?: string;
  titleClassName?: string;
}

export const EventImagePreview = ({
  className,
  titleClassName,
}: EventImagePreview) => {
  return (
    <div
      className={cn(
        "w-full h-full bg-surface-container-highest flex justify-center items-center rounded-2xl aspect-video shadow-md",
        className,
      )}
    >
      <Title className={cn("text-secondary", titleClassName)} />
    </div>
  );
};
