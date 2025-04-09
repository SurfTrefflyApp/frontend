import { ChevronLeft } from "lucide-react";
import { ReactNode } from "react";

interface ContentHeader {
  withBackArrow?: boolean;
  title?: string;
  rightContent?: ReactNode;
}
export const ContentHeader = ({
  withBackArrow = true,
  title,
  rightContent,
}: ContentHeader) => {
  return (
    <header className="grid grid-cols-[auto_1fr_auto] gap-2 items-center bg-surface-container p-3 rounded-b-3xl shadow-md">
      {withBackArrow && <ChevronLeft className="text-secondary size-[30px]" />}
      {title && (
        <h1 className="font-semibold truncate whitespace-nowrap">{title}</h1>
      )}
      {rightContent}
    </header>
  );
};
