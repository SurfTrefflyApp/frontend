import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { usePhotoUploader } from "./usePhotoUploader";

function createFile(name: string, type: string, content: string): File {
  return new File([content], name, { type });
}

describe("usePhotoUploader", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("initializes with null values", () => {
    const { result } = renderHook(() => usePhotoUploader());

    expect(result.current.previewUrl).toBeNull();
    expect(result.current.selectedFile).toBeNull();
  });

  it("handles valid image file", async () => {
    const { result } = renderHook(() => usePhotoUploader());
    const file = createFile("photo.png", "image/png", "dummy");

    const mockEvent = {
      target: {
        files: [file],
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    const readerMock = {
      readAsDataURL: vi.fn(),
      onload: vi.fn(),
      result: "data:image/png;base64,dummy",
    };

    vi.stubGlobal("FileReader", function () {
      return readerMock;
    });

    act(() => {
      result.current.handleFileChange(mockEvent);
    });

    act(() => {
      readerMock.onload({ target: { result: readerMock.result } });
    });

    expect(result.current.selectedFile).toBe(file);
    expect(result.current.previewUrl).toBe("data:image/png;base64,dummy");
  });

  it("rejects non-image file and alert", () => {
    const { result } = renderHook(() => usePhotoUploader());
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    const file = createFile("document.txt", "text/plain", "not-an-image");
    const mockEvent = {
      target: {
        files: [file],
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleFileChange(mockEvent);
    });

    expect(alertMock).toHaveBeenCalledWith("Not image");
    expect(result.current.selectedFile).toBeNull();
    expect(result.current.previewUrl).toBeNull();
  });

  it("resets photo data", () => {
    const { result } = renderHook(() => usePhotoUploader());

    act(() => {
      result.current.resetPhoto();
    });

    expect(result.current.previewUrl).toBeNull();
    expect(result.current.selectedFile).toBeNull();
  });
});
