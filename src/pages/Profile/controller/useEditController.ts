import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { setErrorEvent } from "@/shared/api";
import { createFormDataAppender } from "@/shared/formData/createFormDataAppender";
import { usePhotoUploader } from "@/shared/lib/usePhotoUploader";

import { updateUsername } from "../api/profile";
import { type Schema, schema } from "../model/edit";
import { $user, setUserEvent } from "../model/user";

interface useEditController {
  setOpen: (state: boolean) => void;
}

export const useEditController = ({ setOpen }: useEditController) => {
  const user = useUnit($user);
  const setUser = useUnit(setUserEvent);
  const setError = useUnit(setErrorEvent);

  const { previewUrl, handleFileChange, selectedFile, resetPhoto } =
    usePhotoUploader();

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
      const appendProfileForm = createFormDataAppender<Schema>();
      const formData = appendProfileForm(values);
      const res = await updateUsername(formData);
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

  useEffect(() => {
    if (selectedFile) {
      form.setValue("avatar", selectedFile);
    } else {
      form.resetField("avatar");
    }
  }, [selectedFile]);

  return {
    form,
    previewUrl,
    onSubmit,
    handleClose,
    handleFileChange,
  };
};
