import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import "./useDebounce";
import { useDebounce } from "./useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));
    expect(result.current).toBe("initial");
  });

  it("should update debounced value after delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      },
    );

    expect(result.current).toBe("initial");

    rerender({ value: "updated", delay: 500 });
    expect(result.current).toBe("initial");

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("updated");
  });

  it("should cancel previous timeout when value changes quickly", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "first", delay: 500 },
      },
    );

    rerender({ value: "second", delay: 500 });
    rerender({ value: "third", delay: 500 });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("third");
  });

  it("should call callback with debounced value", () => {
    const callback = vi.fn();
    const { rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay, callback),
      {
        initialProps: { value: "start", delay: 500 },
      },
    );

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("start");

    callback.mockClear();

    rerender({ value: "updated", delay: 500 });
    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("updated");
  });
  it("should not call callback if unmounted before delay", () => {
    const callback = vi.fn();
    const { unmount } = renderHook(() => useDebounce("test", 500, callback));

    unmount();
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should use latest callback", () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();
    const { rerender } = renderHook(
      ({ value, delay, callback }) => useDebounce(value, delay, callback),
      {
        initialProps: { value: "first", delay: 500, callback: callback1 },
      },
    );

    rerender({ value: "second", delay: 500, callback: callback2 });
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledWith("second");
  });
});
