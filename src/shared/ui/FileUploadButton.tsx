import { ChangeEvent, useRef } from "react";

import { Button } from "@/shared/ui/button";

interface FileUploadButton extends Button {
  label?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  allowedExtensions?: string[];
  multiple?: boolean;
}

export const FileUploadButton = ({
  label = "Загрузить фото",
  handleChange,
  allowedExtensions = ["jpg, jpeg", "png"],
  multiple = false,
  ...props
}: FileUploadButton) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const checkIfInvalidFiles = (files: FileList) => {
    const invalidFiles = Array.from(files).filter((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase();
      return !extension || !allowedExtensions.includes(extension);
    });

    if (invalidFiles.length > 0) {
      alert(
        `Разрешены только файлы с расширениями: ${allowedExtensions.join(", ")}`,
      );
      return true;
    }

    return false;
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!handleChange) return;

    const files = event.target.files;
    if (!files || files.length === 0) return;

    if (checkIfInvalidFiles(files)) {
      return;
    }

    handleChange(event);
  };

  return (
    <>
      <Button onClick={handleClick} {...props}>
        {label}
      </Button>
      <input
        type="file"
        onChange={handleFileChange}
        ref={inputRef}
        accept={allowedExtensions.map((ext) => `.${ext}`).join(",")}
        multiple={multiple}
        style={{ display: "none" }}
      />
    </>
  );
};
