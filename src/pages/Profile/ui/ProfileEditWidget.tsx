import { Edit } from "@/shared/icons/Edit";
import { Button } from "@/shared/ui/button";

interface Edit {
  isAuth: boolean;
  setEditOpen: (editOpen: boolean) => void;
}

export const ProfileEditWidget = ({ isAuth, setEditOpen }: Edit) => {
  return (
    <>
      {isAuth && (
        <Button
          variant="ghost"
          onClick={() => {
            setEditOpen(true);
          }}
        >
          <Edit className="text-primary size-[20px] md:size-[18px]" />
        </Button>
      )}
    </>
  );
};
