import { act, renderHook } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { api } from "@/shared/api";

import { useFetch } from "./useFetch";

type TestData = { message: string };

const mock = new MockAdapter(api);

describe("useFetch", () => {
  const url = "/test-endpoint";
  const responseData: TestData = { message: "Hello, world!" };

  beforeEach(() => {
    mock.reset();
  });

  it("fetches data on mount if shouldFetch is true", async () => {
    mock.onGet(url).reply(200, responseData);

    const { result } = renderHook(() => useFetch<TestData>(url));

    await act(async () => {
      await result.current.execute();
    });

    expect(result.current.data).toEqual(responseData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it("not fetches data on mount if shouldFetch is false", async () => {
    const onSuccess = vi.fn();

    const { result } = renderHook(() =>
      useFetch<TestData>(url, false, onSuccess),
    );

    expect(result.current.data).toBeUndefined();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(onSuccess).not.toHaveBeenCalled();
  });

  it("manually fetches data when execute is called", async () => {
    mock.onGet(url).reply(200, responseData);

    const onSuccess = vi.fn();

    const { result } = renderHook(() =>
      useFetch<TestData>(url, false, onSuccess),
    );

    await act(async () => {
      await result.current.execute();
    });

    expect(result.current.data).toEqual(responseData);
    expect(onSuccess).toHaveBeenCalledWith(responseData);
  });

  it("handles errors correctly", async () => {
    mock.onGet(url).reply(500);

    const { result } = renderHook(() => useFetch<TestData>(url));

    await act(async () => {
      await result.current.execute();
    });

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeDefined();
    expect(result.current.loading).toBe(false);
  });

  it("uses custom config", async () => {
    mock.onPost(url).reply(200, responseData);

    const { result } = renderHook(() =>
      useFetch<TestData>(url, false, undefined, { method: "POST" }),
    );

    await act(async () => {
      await result.current.execute();
    });

    expect(result.current.data).toEqual(responseData);
  });
});
