import { DefaultUser } from "@/shared/icons/DefaultUser";
import { usePhotoUploader } from "@/shared/lib/usePhotoUploader";
import { AdaptivePopover } from "@/shared/ui/AdaptivePopover";
import { FileUploadButton } from "@/shared/ui/FileUploadButton";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

interface ProfileEdit {
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const ProfileEdit = ({ open, setOpen }: ProfileEdit) => {
  const { previewUrl, handleFileChange } = usePhotoUploader();

  return (
    <AdaptivePopover
      open={open}
      setOpen={setOpen}
      header={
        <h1 className="text-primary text-3xl font-semibold text-center border-b-2 pb-2 border-outline-variant">
          Редактирование
        </h1>
      }
    >
      <div className="flex flex-col gap-10 p-4">
        <div className="flex gap-4 items-center justify-center">
          {previewUrl ? (
            <img
              className="w-[110px] h-[110px] rounded-full object-fill bg-red-100"
              src={previewUrl}
            />
          ) : (
            <DefaultUser />
          )}
          <FileUploadButton
            handleChange={handleFileChange}
            variant="outline"
            className="rounded-4xl p-2 text-sm font-medium"
          />
        </div>
        <Input autoComplete="name" placeholder="Имя" />
        <Button>Сохранить</Button>
      </div>
    </AdaptivePopover>
  );
};
