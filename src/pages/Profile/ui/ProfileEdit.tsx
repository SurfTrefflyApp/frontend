import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useForm } from "react-hook-form";

import { Schema, schema } from "@/pages/Profile/model/edit";
import { $user, setUsernameEvent } from "@/pages/Profile/model/user";

import { DefaultUser } from "@/shared/icons/DefaultUser";
import { usePhotoUploader } from "@/shared/lib/usePhotoUploader";
import { AdaptivePopover } from "@/shared/ui/AdaptivePopover";
import { FileUploadButton } from "@/shared/ui/FileUploadButton";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

interface ProfileEdit {
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const ProfileEdit = ({ open, setOpen }: ProfileEdit) => {
  const user = useUnit($user);
  const setUsername = useUnit(setUsernameEvent);

  const { previewUrl, handleFileChange, resetPhoto } = usePhotoUploader();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: user?.username || "Kfsdf",
    },
    mode: "all",
  });

  const onSubmit = (values: Schema) => {
    setUsername(values.username);
    setOpen(false);
  };

  const handleClose = () => {
    form.setValue("username", user?.username || "");
    resetPhoto();
    setOpen(false);
  };

  return (
    <AdaptivePopover
      open={open}
      setOpen={handleClose}
      header={
        <h1 className="text-primary text-3xl font-semibold text-center border-b-2 pb-2 border-outline-variant">
          Редактирование
        </h1>
      }
    >
      <div className="p-4">
        <div className="flex gap-4 items-center justify-center mb-4">
          {previewUrl ? (
            <img
              className="w-[120px] h-[120px] rounded-full object-fill bg-red-100"
              src={previewUrl}
            />
          ) : (
            <DefaultUser className="w-[120px] h-[120px]" />
          )}
          <FileUploadButton
            handleChange={handleFileChange}
            variant="outline"
            className="rounded-4xl p-2 text-sm font-medium"
          />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="username"
                      autoComplete="name"
                      placeholder="Имя"
                      error={!!form.formState.errors.username}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.username && (
                    <FormMessage>
                      {form.formState.errors.username.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            ></FormField>
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              loading={form.formState.isSubmitting}
            >
              Сохранить
            </Button>
          </form>
        </Form>
      </div>
    </AdaptivePopover>
  );
};
