import type { User } from "@/entities/User";

import { DefaultUser } from "@/shared/icons/DefaultUser";
import { Trash } from "@/shared/icons/Trash";
import { Button } from "@/shared/ui/button";

interface UserCard {
  user: User;
  onDelete: (userId: number) => void;
}

export const UserCard = ({ user, onDelete }: UserCard) => {
  return (
    <div className="flex items-center gap-4 w-full max-w-[400px] bg-surface-container p-6 rounded-2xl shadow-md">
      {user.imageUrl ? (
        <img
          src={user.imageUrl}
          className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] rounded-full"
        />
      ) : (
        <DefaultUser className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] rounded-full shadow-md" />
      )}
      <div className="flex-1 flex items-center gap-2">
        <div className="flex-1">
          <h2 className="font-semibold">{user.username}</h2>
          <h3>{user.email}</h3>
        </div>
        {user.id && (
          <Button
            variant="ghost"
            onClick={() => {
              if (user.id) {
                onDelete(user.id);
              }
            }}
          >
            <Trash className="size-6" />
          </Button>
        )}
      </div>
    </div>
  );
};
