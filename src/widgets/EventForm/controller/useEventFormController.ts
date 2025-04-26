import { useEffect } from "react";
import type { UseFormReturn } from "react-hook-form";

import { usePhotoUploader } from "@/shared/lib/usePhotoUploader";

import type { EventSchema } from "../model/formSchema";

interface useEventFormController {
  form: UseFormReturn<EventSchema>;
  defaultPreviewURL?: string;
}

export const useEventFormController = ({
  form,
  defaultPreviewURL,
}: useEventFormController) => {
  const { previewUrl, handleFileChange, selectedFile } =
    usePhotoUploader(defaultPreviewURL);

  useEffect(() => {
    if (selectedFile) {
      form.setValue("image", selectedFile);
      form.trigger("image");
    } else {
      form.resetField("image");
    }
  }, [selectedFile]);

  return {
    previewUrl,
    handleFileChange,
  };
};
