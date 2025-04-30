import type { ChangeEvent } from "react";
import { useCallback, useEffect, useState } from "react";

export const usePhotoUploader = (defaultPreviewURL?: string) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    setPreviewUrl(defaultPreviewURL ?? null);
  }, [defaultPreviewURL]);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      if (!file.type.match("image.*")) {
        alert("Not image");
        return;
      }

      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    },
    [],
  );

  const resetPhoto = useCallback(() => {
    setPreviewUrl(defaultPreviewURL ?? null);
    setSelectedFile(null);
  }, [defaultPreviewURL]);

  return {
    previewUrl,
    selectedFile,
    handleFileChange,
    resetPhoto,
  };
};
