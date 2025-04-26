import type { ChangeEvent, ReactNode } from "react";
import { useRef } from "react";

import { Button } from "@/shared/ui/button";

interface FileUploadButton extends Button {
  children?: ReactNode;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  allowedExtensions?: string[];
  multiple?: boolean;
  onTypeMismatch?: (allowedExtensions: string[]) => void;
}

export const FileUploadButton = ({
  children = "Загрузить фото",
  handleChange,
  allowedExtensions = ["jpg", "jpeg", "png"],
  multiple = false,
  onTypeMismatch,
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
      onTypeMismatch?.(allowedExtensions);
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
      <Button onClick={handleClick} type="button" {...props}>
        {children}
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
