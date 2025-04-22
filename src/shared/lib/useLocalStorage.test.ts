import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  const key = "test-key";

  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("returns default value if no saved value in localStorage", () => {
    const { result } = renderHook(() => useLocalStorage(key, "default-value"));

    const [value] = result.current;
    expect(value).toBe("default-value");
  });

  it("loads saved value from localStorage", () => {
    localStorage.setItem(key, JSON.stringify("saved-value"));

    const { result } = renderHook(() => useLocalStorage(key, "default-value"));

    const [value] = result.current;
    expect(value).toBe("saved-value");
  });

  it("updates value and localStorage when setValue is called", () => {
    const { result } = renderHook(() => useLocalStorage(key, "initial"));

    act(() => {
      const [, setValue] = result.current;
      setValue("new-value");
    });

    const [value] = result.current;
    expect(value).toBe("new-value");
    expect(localStorage.getItem(key)).toBe(JSON.stringify("new-value"));
  });

  it("works with object values", () => {
    const initialValue = { foo: "bar" };

    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    act(() => {
      const [, setValue] = result.current;
      setValue({ foo: "baz" });
    });

    const [value] = result.current;
    expect(value).toEqual({ foo: "baz" });
    expect(localStorage.getItem(key)).toBe(JSON.stringify({ foo: "baz" }));
  });
});
