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
    usePhotoUploader(user?.imageUrl);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: user?.username || "",
      delete_image: false,
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
      if (values.image && values.delete_image) {
        formData.set("delete_image", "true");
      }
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

  const handleImageDelete = () => {
    resetPhoto(false);
    form.setValue("delete_image", true);
  };

  useEffect(() => {
    if (selectedFile) {
      form.setValue("image", selectedFile);
      form.setValue("delete_image", false);
    } else {
      form.resetField("image");
    }
  }, [selectedFile]);

  return {
    form,
    previewUrl,
    onSubmit,
    handleClose,
    handleFileChange,
    handleImageDelete,
  };
};
