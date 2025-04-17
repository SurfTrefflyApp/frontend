import type { ChangeEvent} from "react";
import { useCallback, useState } from "react";

export const usePhotoUploader = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
    setPreviewUrl(null);
    setSelectedFile(null);
  }, []);

  return {
    previewUrl,
    selectedFile,
    handleFileChange,
    resetPhoto,
  };
};
