import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { updateUsername } from "@/pages/Profile/api/profile";
import { Schema, schema } from "@/pages/Profile/model/edit";
import { $user, setUserEvent } from "@/pages/Profile/model/user";

import { setErrorEvent } from "@/shared/api";
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
  const setUser = useUnit(setUserEvent);
  const setError = useUnit(setErrorEvent);

  const { previewUrl, handleFileChange, resetPhoto } = usePhotoUploader();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: user?.username || "",
    },
    mode: "all",
  });

  useEffect(() => {
    form.setValue("username", user?.username || "");
  }, [user?.username, form]);

  const onSubmit = async (values: Schema) => {
    try {
      const res = await updateUsername(values.username);
      setUser(res.data);
      setOpen(false);
    } catch (error) {
      setError(error);
    }
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
